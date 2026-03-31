---
articleId: 584d6cec-2b06-4029-bc28-deeddf77bbb5
slug: data-source-github-graphql
title: 転送元 - GitHub GraphQL API
parentCategoryId: b257af88-17fc-4a4d-bf94-dc694a258787
languageCode: ja
---

## 概要
GitHub API v4（GraphQL）を用いてデータを転送する設定のDocsです。

GitHub API v4（GraphQL）を利用し、GraphQLクエリを記述することで各種クエリ結果をJSONレコードとして取得できます。

## 取得可能なデータ
GitHub API v4でGraphQLクエリにより取得可能な全ての項目が対象です。
クエリ結果（JSON）に対し、JSON Path形式で対象パスを指定することで、転送対象のフィールドを絞ることができます。

また、絞り込み結果対象が配列の場合は1要素1行として取り込むことができます。
例）Issues一覧を取得した場合、Issuesの集合をパス指定することで各issueごとに取り込みことが可能です。

ページングが必要な項目については、 TROCCO 組み込みの `GraphQL Variables （ $__trocco_githubEndCursor__ ）`を利用することで
cursorをずらしながらのAPIリクエストが可能です。
詳しくは下記「ページネーションの仕組み」をご覧ください。

## 設定項目
### STEP1 基本設定
| 項目 | 必須 | デフォルト値 | 内容 |
| --- | --- | --- | --- |
| GitHub接続情報 | Yes | - | TROCCOに登録したGitHub接続情報を指定します。 |
| GraphQLクエリ | Yes | ※クエリサンプル有 | ページネーションを利用する場合はVariablesとして`$\_\_trocco_githubEndCursor__`を利用して複数ページに渡るリクエストを記述することが出来ます。 |
| 取り込み対象のパス（JSON Path） | Yes | - | JSON結果から取得対象を絞り込むことができます。<br><br>例）<br>GraphQLクエリ結果として以下のJSONが取得できるとします。<br><pre>{<br>"data": {<br>    "repository": {<br>      "issues": \[\{\<#issue1\>\}, \{\<#issue2\>\}\]<br>    }<br>  }<br>}</pre><br>issuesだけを取り出したい場合、issuesの場所をJSON Path形式で指定します。<br>`$.data.repository.issues`<br>出力結果は以下になります<br>`\[\{\<#issue1>}, \{\<#issue2>}]`<br>出力結果が配列のため、issue1、issue2は別々の行として取り込まれます。  |
| ページネーション | Yes | 無効 | - |
| endCursorのパス（JSON Path） | No<br>（ページネーションの場合Yes） | - | クエリ結果のJSONに含まれるendCursorのパスを指定します。<br>なお、結果にendCursorを含むためには、GraphQLクエリでpageInfoを指定する必要があります。<br>詳しくは下記「ページネーションの仕組み」をご覧ください。<br><br>例）<br>`$.data.repository.issues.pageInfo.endCursor` |
| hasNextPageのパス（JSON Path） | No<br>（ページネーションの場合Yes） | - | クエリ結果のJSONに含まれるhasNextPageのパスを指定します。<br>なお、結果にhasNextPageを含むためには、GraphQLクエリでhasNextPageを指定する必要があります。<br>詳しくは下記「ページネーションの仕組み」をご覧ください。<br><br>例）<br>`$.data.repository.issues.pageInfo.hasNextPage` |

※GraphQLクエリにはあらかじめクエリサンプルがデフォルト値として以下のように記述してあります。
![image.png](https://cdn.document360.io/3a3bae1e-f157-487f-8798-01e9d820e760/Images/Documentation/data-source-github-graphql-2024-08-29-23-18-0.png){height="" width=""}

#### ページネーションの仕組み
GitHub GraphQL API v4では、開始cursorをafterに指定することでEdgeの開始位置を指定できます。
TROCCOでは、クエリレスポンスに含まれる最終cursorを取得し、組み込み変数の`$\_\_trocco__githubEndCursor__`に値を渡します。
次のページが存在する場合、クエリのafterに組み込み変数を指定することで次ページのリクエストを行います。
なお、取得上限は10,000ページです。

## 設定例
#### Organizationに所属するmembersの取得
Organization配下のmember のアカウント名、名前、roleを取得してみます。

#### GraphQLクエリ
※oraganizationのloginはお客様のOrganization名に書き換えてください。

<pre>
query {
  organization(login: "primenumber-dev") {
    membersWithRole(first: 2) {
      edges {
        node {
          login
          name
        }
        role
      }
    }
  }
}
</pre>

GitHub GraphQL API Explorerでクエリ結果を確認すると、以下のようなJSONであることが確認できます。

#### クエリ結果

<pre>
{
  "data": {
    "organization": {
      "membersWithRole": {
        "edges": [
          {
            "node": {
              "login": "trocco-taro",
              "name": "TROCCO Taro"
            },
            "role": "ADMIN"
              },
        {
          "node": {
            "login": "trocco-hanako",
            "name": "TROCCO Hanako"
          },
          "role": "ADMIN"
        }
    }
  }
}
}
</pre>

取り込みたいのは各memberの情報なので、 以下のように data > organization > memberWithRole > edges をJSON Pathで指定し、
member単位でレコードとして取り込みます。
 
#### 取り込み対象パスの指定 （JSON Path）

`$.data.organization.memberWithRole.edges`
このとき、edgesは配列のため、1要素ごと1レコードとして取り込むことができます。
 
最終的に以下のように取り込むことができました。

| records |
| --- |
| {"node": { "login": "trocco-taro", "name": "TROCCO Taro" }, "role": "ADMIN"} |
| {"node": { "login": "trocco-hanako", "name": "TROCCO Hanako" }, "role": "ADMIN"} |

## Repository配下の全Issues取得（ページネーション利用）

#### GraphQLクエリ

<pre>
query($__trocco__githubEndCursor__:String){
  repository(owner: "<#input your organization>", name: "<#input your repository>") {
    issues(first: 100, states: OPEN, after:$__trocco__githubEndCursor__) {
      edges {
        node {
          title
          url
          number
          updatedAt
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
</pre>

#### パスの指定
<table>
    <tr>
        <td>取り込み対象のパス</td>
        <td>$.data.repository.issues.edges[*].node</td>
    </tr>
    <tr>
        <td>pageInfo.endCursor のパス</td>
        <td>$.data.repository.issues.pageInfo.endCursor</td>
    </tr>
    <tr>
        <td>pageInfo.hasNextPage のパス</td>
        <td>$.data.repository.issues.pageInfo.hasNextPage</td>
    </tr>
</table>

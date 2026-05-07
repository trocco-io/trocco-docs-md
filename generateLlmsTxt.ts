import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { globSync } from "glob";
import parseMD from "parse-md";

// const products = ["trocco", "cometa"] as const;
const products = ["trocco"] as const;
type Product = (typeof products)[number];

type Article = {
  product: Product;
  sectionPath: string[];
  title: string;
  slug: string;
  url: string;
  relativePath: string;
};

type Frontmatter = {
  articleId?: unknown;
  slug?: unknown;
  title?: unknown;
  languageCode?: unknown;
};

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const docsRoot = path.join(currentDir, "tmp", "trocco-source", "docs_public");
const outputPath = path.join(currentDir, "llms.txt");
const targetLanguage = "ja" as const;

const productLabels: Record<Product, string> = {
  trocco: "TROCCO",
  // cometa: "COMETA",
};

const sectionLabels: Record<string, string> = {
  // TROCCO
  "010_tutorial": "チュートリアル",
  "020_etl-elt": "ETL･ELT･ワークフロー",
  "010_connection-configurations": "接続情報",
  "020_etl-configuration": "転送設定",
  "010_source": "転送設定 - 転送元コネクタ",
  "020_destination": "転送設定 - 転送先コネクタ",
  "030_etl-configurations-common": "転送設定 - 共通設定",
  "010_etl-configurations-data-settings": "転送設定STEP2 - データ設定",
  "040_etl-configurations-others": "転送設定 - その他",
  "030_managed-etl-configuration": "マネージド転送設定",
  "040_data-mart": "データマート定義",
  "050_dbt-integration": "dbt連携",
  "060_workflow": "ワークフロー定義",
  "070_custom-connector": "カスタムコネクタ",
  "080_shr": "Self-Hosted Runner",
  "090_cdc-job-definition": "CDCデータ転送",
  "100_etl-elt-convenient-features":
    "便利な機能",
  "030_data-management": "データマネジメント",
  "010_data-catalog": "データカタログ",
  "040_team-function": "チーム機能",
  "050_system-management": "運用支援",
  "010_git-integration-feature": "Gitリポジトリ連携",
  "060_account-management": "アカウント管理",
  "010_account-user": "ユーザー管理",
  "020_security": "セキュリティ",
  "070_trocco-action": "TROCCO ACTION",
  "080_n-analytics": "TROCCO Web行動ログ",
  "090_faq": "技術情報",
  "100_plans": "契約プラン情報",
  "110_release-note": "リリースノート",
  "120_announcement": "お知らせ",
  "130_terms-of-service": "利用規約",
  // COMETA
  "010_cometa-outline": "COMETAの概要",
  "020_ai-chat": "AIチャット",
  "030_explore": "探索",
  "040_databases": "データベース",
  "050_dashboards": "ダッシュボード",
  "060_glossary": "用語集",
  "070_query-collection": "クエリ集",
  "080_management-integration": "管理・連携",
  "010_datastore-integrations": "データストア連携管理",
  "020_metadata-management": "メタデータ管理",
  "090_about-account-user": "アカウント・ユーザー管理",
  "100_catalog-specifications": "COMETAの各種仕様",
  "110_faq-cometa": "FAQ",
  "120_release-note-cometa": "リリースノート",
  "130_terms-of-service-cometa": "利用規約",
};

const isProduct = (value: string): value is Product => {
  return products.some((product) => product === value);
};

const isFrontmatter = (metadata: unknown): metadata is Frontmatter => {
  return typeof metadata === "object" && metadata !== null;
};

const normalizePath = (filePath: string) => filePath.split(path.sep).join("/");

const getString = (value: unknown) => {
  return typeof value === "string" && value.length > 0 ? value : undefined;
};

const fallbackTitle = (filePath: string) => {
  return path.basename(filePath, ".md").replace(/-/g, " ");
};

const getSectionLabel = (part: string) => {
  return (
    sectionLabels[part] ?? part.replace(/^\d+_/, "").replace(/[-_]/g, " ")
  );
};

const getArticleUrl = (product: Product, slug: string) => {
  // if (product === "cometa") {
  //   return `https://documents.trocco.io/cometa/docs/${slug}`;
  // }

  return `https://raw.githubusercontent.com/trocco-io/trocco-docs-md/refs/heads/main/trocco/${slug}.md`;
};

const escapeLinkText = (title: string) => {
  return title.replace(/\[/g, "\\[").replace(/\]/g, "\\]");
};

const compareByPath = (a: Article, b: Article) => {
  return a.relativePath.localeCompare(b.relativePath, "ja");
};

const getChangedSectionIndex = (
  previousSectionPath: string[],
  currentSectionPath: string[]
) => {
  const maxLength = Math.max(
    previousSectionPath.length,
    currentSectionPath.length
  );

  for (let index = 0; index < maxLength; index += 1) {
    if (previousSectionPath[index] !== currentSectionPath[index]) {
      return index;
    }
  }

  return currentSectionPath.length;
};

const buildHeading = (level: number, title: string) => {
  return `${"#".repeat(Math.min(level, 6))} ${title}`;
};

const appendBlankLine = (lines: string[]) => {
  if (lines.at(-1) !== "") {
    lines.push("");
  }
};

const logSkippedArticle = (relativePath: string, reason: string) => {
  console.warn(`Skipped ${relativePath}: ${reason}`);
};

const collectArticle = (file: string): Article | undefined => {
  const relativePath = normalizePath(path.relative(docsRoot, file));
  const [product, language, ...articleParts] = relativePath.split("/");

  if (!isProduct(product)) {
    return undefined;
  }

  if (language !== targetLanguage) {
    return undefined;
  }

  const fileContent = fs.readFileSync(file, "utf8");
  const parsed = parseMD(fileContent);
  const metadata = isFrontmatter(parsed.metadata) ? parsed.metadata : {};

  if (metadata.languageCode !== undefined && metadata.languageCode !== targetLanguage) {
    return undefined;
  }

  if (metadata.articleId === undefined) {
    logSkippedArticle(relativePath, "missing articleId");
    return undefined;
  }

  const filename = articleParts.at(-1);
  if (filename === undefined) {
    logSkippedArticle(relativePath, "missing filename");
    return undefined;
  }

  const slugFromFrontmatter = getString(metadata.slug);
  if (slugFromFrontmatter === undefined) {
    logSkippedArticle(relativePath, "missing slug");
    return undefined;
  }

  const slugFromFilename = path.basename(filename, ".md");
  if (slugFromFrontmatter !== slugFromFilename) {
    logSkippedArticle(
      relativePath,
      `slug "${slugFromFrontmatter}" does not match filename "${filename}"`
    );
    return undefined;
  }

  const title = getString(metadata.title) ?? fallbackTitle(file);
  const sectionPath = articleParts.slice(0, -1).map(getSectionLabel);

  return {
    product,
    sectionPath,
    title,
    slug: slugFromFrontmatter,
    url: getArticleUrl(product, slugFromFrontmatter),
    relativePath,
  };
};

const isArticle = (article: Article | undefined): article is Article => {
  return article !== undefined;
};

const collectArticles = () => {
  const files = globSync(`${docsRoot}/*/*/**/*.md`, {
    nodir: true,
  }).sort((a, b) => a.localeCompare(b, "ja"));

  return files.map(collectArticle).filter(isArticle);
};

const buildLlmsTxt = (articles: Article[]) => {
  const lines = [
    "# TROCCO Docs",
    "",
    "TROCCOのユーザー向けドキュメント一覧です。",
    "",
  ];

  products.forEach((product) => {
    const productArticles = articles
      .filter((article) => article.product === product)
      .sort(compareByPath);

    let previousSectionPath: string[] = [];

    productArticles.forEach((article) => {
      const changedSectionIndex = getChangedSectionIndex(
        previousSectionPath,
        article.sectionPath
      );

      article.sectionPath.slice(changedSectionIndex).forEach((section, index) => {
        const sectionIndex = changedSectionIndex + index;
        appendBlankLine(lines);
        lines.push(buildHeading(sectionIndex + 2, section), "");
      });

      lines.push(`- [${escapeLinkText(article.title)}](${article.url})`);
      previousSectionPath = article.sectionPath;
    });

    lines.push("");
  });

  return `${lines.join("\n").trimEnd()}\n`;
};

const articles = collectArticles();
const llmsTxt = buildLlmsTxt(articles);

fs.writeFileSync(outputPath, llmsTxt, "utf8");

console.log(`Generated ${outputPath} with ${articles.length} article links.`);

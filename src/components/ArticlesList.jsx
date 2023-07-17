import ArticleOverview from "./ArticleOverview";

export default function ArticlesList({ allArticles }) {
  return (
    <section className="page-section">
      {allArticles.map((article) => {
        return <ArticleOverview article={article} />;
      })}
    </section>
  );
}

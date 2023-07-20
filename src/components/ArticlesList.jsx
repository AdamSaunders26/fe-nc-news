import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import { ArticleOverviewSkeleton } from "../utils/loadingSkeletons";

export default function ArticlesList({ loading, allArticles }) {
  return (
    <section>
      {loading ? (
        <ArticleOverviewSkeleton />
      ) : (
        allArticles.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <ArticleCard article={article} loading={loading} />
            </Link>
          );
        })
      )}
    </section>
  );
}

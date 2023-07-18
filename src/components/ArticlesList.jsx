import ArticleCard from "./ArticleCard";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

export default function ArticlesList({ loading, allArticles }) {
  return (
    <section>
      {loading ? (
        <div>
          <Skeleton animation="wave" />
          <Skeleton animation="wave" variant="rectangular" height={100} />
          <Skeleton animation="wave" variant="text" />
        </div>
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

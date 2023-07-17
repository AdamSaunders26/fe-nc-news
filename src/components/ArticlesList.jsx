import ArticleCard from "./ArticleCard";
import Skeleton from "@mui/material/Skeleton";

export default function ArticlesList({ loading, allArticles }) {
  console.log(loading);

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
            <ArticleCard
              key={article.article_id}
              article={article}
              loading={loading}
            />
          );
        })
      )}
    </section>
  );
}

import ArticleCard from "./ArticleCard";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { ArticleOverviewSkeleton } from "../utils/loadingSkeletons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticles } from "../utils/axiosFunctions";

export default function ArticlesList({
  loading,
  allArticles,
  currentTopic,
  setCurrentTopic,
  setAllArticles,
}) {
  const { topic } = useParams();
  const [queryLoading, setQueryLoading] = useState(false);
  useEffect(() => {
    setCurrentTopic(topic);
  }, []);

  useEffect(() => {
    setQueryLoading(true);
    getArticles(topic).then((newArticles) => {
      setAllArticles(newArticles);
      setQueryLoading(false);
    });
  }, [topic]);
  console.log(allArticles);
  
  return (
    <section>
      {loading || queryLoading ? (
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

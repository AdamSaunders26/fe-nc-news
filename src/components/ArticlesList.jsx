import ArticleCard from "./ArticleCard";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";
import { ArticleOverviewSkeleton } from "../utils/loadingSkeletons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ArticlesList({
  loading,
  allArticles,
  setCurrentTopic,
}) {
  const { topic } = useParams();

  useEffect(() => {
    setCurrentTopic(topic);
  }, []);

  const filteredArticles = allArticles.filter((article) => {
    return topic === "all" ? true : article.topic === topic;
  });

  return (
    <section>
      {loading ? (
        <ArticleOverviewSkeleton />
      ) : (
        filteredArticles.map((article) => {
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

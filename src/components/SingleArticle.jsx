import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getSingleArticle } from "../utils/axiosFunctions";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";
import Skeleton from "@mui/material/Skeleton";
import { ArticleSkeleton, CommentSkeleton } from "../utils/loadingSkeletons";

export default function SingleArticle() {
  const { article_id } = useParams();

  const [currentArticle, setCurrentArticle] = useState({});
  const [currrentComments, setCurrentComments] = useState([]);
  const [loading, setLoading] = useState([true, true]);

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setCurrentArticle(article);
      setLoading((loading) => {
        const newLoading = [...loading];
        newLoading[0] = false;
        return newLoading;
      });
    });
    getComments(article_id).then((comments) => {
      setCurrentComments(comments);
      setLoading((loading) => {
        const newLoading = [...loading];
        newLoading[1] = false;
        return newLoading;
      });
    });
  }, []);

  return (
    <section className="single-article">
      {loading[0] ? (
        <ArticleSkeleton />
      ) : (
        <ArticleDetails article={currentArticle} />
      )}
      {loading[1] ? (
        <CommentSkeleton />
      ) : (
        <CommentsList comments={currrentComments} />
      )}
    </section>
  );
}

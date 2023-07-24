import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getSingleArticle } from "../utils/axiosFunctions";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";
import Skeleton from "@mui/material/Skeleton";
import { ArticleSkeleton, CommentSkeleton } from "../utils/loadingSkeletons";
import NewComment from "./NewComment";
import ErrorHandler from "./ErrorHandler";

export default function SingleArticle({ username, allUsers }) {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [currrentComments, setCurrentComments] = useState([]);
  const [loading, setLoading] = useState([true, true]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((article) => {
        setCurrentArticle(article);
        setLoading((loading) => {
          const newLoading = [...loading];
          newLoading[0] = false;
          return newLoading;
        });
      })
      .catch((err) => {
        setIsError(err.response);
      });

    getComments(article_id)
      .then((comments) => {
        setCurrentComments(comments);
        setLoading((loading) => {
          const newLoading = [...loading];
          newLoading[1] = false;
          return newLoading;
        });
      })
      .catch((err) => {
        setIsError(err.response);
      });
  }, []);

  if (isError) {
    return (
      <ErrorHandler status={isError.status} message={isError.data.message} />
    );
  } else {
    return (
      <div className="single-article-page">
        <section className="single-article">
          {loading[0] ? (
            <ArticleSkeleton />
          ) : (
            <ArticleDetails article={currentArticle} />
          )}
        </section>
        <section className="comment-section">
          {loading[1] ? (
            <CommentSkeleton />
          ) : (
            <CommentsList
              currentComments={currrentComments}
              setCurrentComments={setCurrentComments}
                username={username}
                allUsers={allUsers}
            />
          )}
          <NewComment
            article_id={article_id}
            username={username}
            setCurrentComments={setCurrentComments}
          />
        </section>
      </div>
    );
  }
}

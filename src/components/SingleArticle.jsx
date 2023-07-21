import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getSingleArticle } from "../utils/axiosFunctions";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";
import Skeleton from "@mui/material/Skeleton";
import { ArticleSkeleton, CommentSkeleton } from "../utils/loadingSkeletons";
import NewComment from "./NewComment";
import ErrorHandler from "./ErrorHandler";

export default function SingleArticle({ username }) {
  const { article_id } = useParams();
  const [currentArticle, setCurrentArticle] = useState({});
  const [currrentComments, setCurrentComments] = useState([]);
  const [loading, setLoading] = useState([true, true]);
  const [isError, setIsError] = useState([false, null, false, null]);

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
        setIsError((isError) => {
          const newError = [...isError];
          newError[0] = true;
          newError[1] = err.response;
          return newError;
        });
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
        console.log(err);
        setIsError((isError) => {
          const newError = [...isError];
          newError[0] = true;
          newError[1] = err.response;
          return newError;
        });
      });
  }, []);

  if (isError[0]) {
    return (
      <ErrorHandler
        status={isError[1].status}
        message={isError[1].data.message}
      />
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

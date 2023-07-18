import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments, getSingleArticle } from "../utils/getFunctions";
import ArticleDetails from "./ArticleDetails";
import CommentsList from "./CommentsList";

export default function SingleArticle() {
  const { article_id } = useParams();
  // const defaultArticle = {
  //   article_id: "",
  //   title: "",
  //   topic: "",
  //   author: "",
  //   body: "",
  //   created_at: "",
  //   votes: "",
  //   article_img_url: "",
  //   comment_count: "",
  // };
  const [currentArticle, setCurrentArticle] = useState({});
  const [currrentComments, setCurrentComments] = useState([]);

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setCurrentArticle(article);
    });
    getComments(article_id).then((comments) => {
      setCurrentComments(comments);
    });
  }, []);

  return (
    <section className="single-article">
      <ArticleDetails article={currentArticle} />
      <CommentsList comments={currrentComments} />
    </section>
  );
}

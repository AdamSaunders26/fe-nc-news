import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/getFunctions";
import ArticleDetails from "./ArticleDetails";

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

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setCurrentArticle(article);
    });
  }, []);

  return (
    <section>
      <ArticleDetails article={currentArticle} />
    </section>
  );
}

import axios from "axios";

const backendAPI = axios.create({
  baseURL: "https://nc-news-app.onrender.com/api",
});

export function getArticles() {
  return backendAPI
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getSingleArticle(article_id) {
  return backendAPI
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.articles
    })
    .catch((err) => {
      console.log(err);
    });
}

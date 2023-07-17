import axios from "axios";

export function getArticles() {
  return axios
    .get("https://nc-news-app.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

import axios from "axios";

const backendAPI = axios.create({
  baseURL: "https://nc-news-app.onrender.com/api",
});

export function getArticles(topic) {
  let APIstring = `/articles`;
  if (topic && topic != "all") {
    APIstring += `?topic=${topic}`;
  }
  console.log(APIstring);
  return backendAPI
    .get(APIstring)
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
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getComments(article_id) {
  return backendAPI
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function patchArticle(article_id, inc_votes) {
  return backendAPI
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => {
      return data.patchedArticle;
    });
}

export function getTopics() {
  return backendAPI.get("/topics").then(({ data }) => {
    return data.topics;
  });
}

export function postComment(article_id, comment) {
  return backendAPI
    .post(`/articles/${article_id}/comments`, comment)
    .then(({ data }) => {
      return data.postedComment;
    });
}

import { capitaliseString, convertDate } from "../utils/utilityFunctions";

export default function ArticleDetails({ article }) {
  const {
    title,
    topic,
    author,
    body,
    comment_count,
    created_at,
    votes,
    article_img_url,
  } = article;
  

  return (
    <article className="article-details">
      <h3>{title}</h3>
      <div>
        <p>{author}</p>
        <p>{capitaliseString(topic)}</p>
        <p>{convertDate(created_at)}</p>
      </div>
      <img src={article_img_url} />
      <p>{body}</p>
      <div>
        <p>{votes} votes</p>
        <p>{comment_count} comments</p>
      </div>
    </article>
  );
}

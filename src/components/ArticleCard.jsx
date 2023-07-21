import { capitaliseString, convertDate } from "../utils/utilityFunctions";

export default function ArticleCard({ article }) {
  const {
    title,
    topic,
    author,
    votes,
    comment_count,
    article_img_url,
    created_at,
  } = article;

  return (
    <section className="article-card">
      <div>
        <section>
          <p>
            <span>{author}</span>
          </p>
        </section>
        <section>
          <p>{capitaliseString(topic)}</p>
          <p>{convertDate(created_at)}</p>
        </section>
      </div>
      <div className="article-card-middle">
        <h3>{title}</h3>
        <img src={article_img_url} />
      </div>
      <div>
        <p>
          {votes} {votes === 1 ? "vote" : "votes"}
        </p>
        <p>
          {comment_count} {comment_count === 1 ? "comment" : "comments"}
        </p>
      </div>
    </section>
  );
}

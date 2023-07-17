import { getArticles } from "../utils/getFunctions";

export default function ArticleOverview({ article }) {
  
  const { title, topic, author, votes, comment_count } = article;
  return (
    <section className="article-overview">
      <h3>{title}</h3>
      <div className="article-overview-details">
        <p>{author}</p>
        <p>{topic}</p>
        <p>{votes}</p>
        <p>{comment_count}</p>
      </div>
    </section>
  );
}

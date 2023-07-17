

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

  const date = created_at.slice(0, 10);
  // return <Skeleton animation="wave" />;
  return (
    <section className="article-card">
      <div>
        <h3>{title}</h3>
        <img src={article_img_url} />
      </div>
      <div>
        <p>{author}</p>
        <p>{topic}</p>
        <p>{date}</p>
      </div>
      <div>
        <p>{votes} votes</p>
        <p>{comment_count} comments</p>
      </div>
    </section>
  );
}

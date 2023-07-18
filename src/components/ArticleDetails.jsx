import { capitaliseString, convertDate } from "../utils/utilityFunctions";
import {
  BiDownvote,
  BiUpvote,
  BiSolidDownvote,
  BiSolidUpvote,
} from "react-icons/bi";

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
        <div className="article-votes">
          <p>{votes} votes</p>
          <button className="upvote">
            <BiUpvote />
          </button>
          <button className="downvote">
            <BiDownvote />
          </button>
        </div>
        <p>{comment_count} comments</p>
      </div>
    </article>
  );
}

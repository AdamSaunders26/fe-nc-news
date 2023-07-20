import { convertDate } from "../utils/utilityFunctions";
import ModifyComment from "./ModifyComment";

export default function CommentCard({ comment, username }) {
  const { author, body, created_at, votes, comment_id } = comment;
  
  return (
    <section>
      <section className="comment-card">
        <p>{body}</p>
        <div>
          <p>{votes} votes</p>
          <p>{author}</p>
          <p>{convertDate(created_at)}</p>
        </div>
      </section>
      {username === author ? <ModifyComment /> : null}
    </section>
  );
}

import { convertDate } from "../utils/utilityFunctions";

export default function CommentCard({ comment }) {
  const { author, body, created_at, votes } = comment;
  return (
    <section className="comment-card">
      <p>{body}</p>
      <div>
        <p>{votes} votes</p>
        <p>{author}</p>
        <p>{convertDate(created_at)}</p>
      </div>
    </section>
  );
}

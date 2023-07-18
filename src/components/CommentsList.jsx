import CommentCard from "./CommentCard";

export default function CommentsList({ comments }) {
  return (
    <section className="comment-list">
      {comments.map((comment) => {
        return <CommentCard key={comment.comment_id} comment={comment} />;
      })}
      <a href="#header">Back to top</a>
    </section>
  );
}

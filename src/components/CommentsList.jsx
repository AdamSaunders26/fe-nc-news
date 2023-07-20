import CommentCard from "./CommentCard";

export default function CommentsList({ comments }) {
  if (!comments.length) {
        return (
      <section>
        <section className="comment-card">
          <p className="no-comments">No comments yet.</p>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </section>
      </section>
    );
  } else {
    return (
      <section className="comment-list">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </section>
    );
  }
}

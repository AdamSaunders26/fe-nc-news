import CommentCard from "./CommentCard";

export default function CommentsList({ comments, username }) {
  if (!comments.length) {
    console.log("here");
    return (
      <section className="comment-card">
        <p className="no-comments">No comments yet.</p>
      </section>
    );
  } else {
    return (
      <section className="comment-list">
        {comments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              username={username}
            />
          );
        })}
      </section>
    );
  }
}

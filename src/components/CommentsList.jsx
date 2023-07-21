import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

export default function CommentsList({
  currentComments,
  username,
  setCurrentComments,
}) {
  const [deletedComment, setDeletedComment] = useState(null);
  
  useEffect(() => {
    if (deletedComment !== null) {
      const newComments = currentComments.filter((comment) => {
        return comment.comment_id !== deletedComment;
      });
      setCurrentComments(newComments);
    }
  }, [deletedComment]);

  if (!currentComments.length) {
    return (
      <section className="comment-card">
        <p className="no-comments">No comments yet.</p>
      </section>
    );
  } else {
    return (
      <section className="comment-list">
        {currentComments.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              username={username}
              setDeletedComment={setDeletedComment}
            />
          );
        })}
      </section>
    );
  }
}

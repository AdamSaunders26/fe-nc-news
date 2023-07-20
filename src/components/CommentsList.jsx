import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

export default function CommentsList({ comments, username }) {
  const [deletedComment, setDeletedComment] = useState(null);
  const [currentComments, setCurrentComments] = useState(comments);
  console.log({ currentComments });

  useEffect(() => {
    console.log({ deletedComment });
    if (deletedComment !== null) {
      console.log("wut");
      const newComments = currentComments.filter((comment) => {
        return comment.comment_id !== deletedComment;
      });
      setCurrentComments(newComments);
    }
  }, [deletedComment]);

  if (!comments.length) {
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

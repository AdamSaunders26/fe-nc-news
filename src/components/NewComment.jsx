import { useEffect, useState } from "react";
import { postComment } from "../utils/axiosFunctions";

export default function NewComment({
  article_id,
  username,
  setCurrentComments,
}) {
  const [newComment, setNewComment] = useState("");
  const [tempComment, setTempComment] = useState("");

  console.log({ tempComment });
  useEffect(() => {
    postComment(article_id, { username: username, body: newComment }).
      then((postedComment) => {
        setCurrentComments((currentComments) => {
          const updatedComments = [...currentComments, postedComment];
          return updatedComments;
        });
      });
  }, [newComment]);

  return (
    <section className="new-comment">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setNewComment(tempComment);
          setTempComment("");
        }}
      >
        <label htmlFor="new-comment">Post new comment:</label>
        <textarea
          onChange={(e) => {
            setTempComment(e.target.value);
          }}
          id="new-comment"
          type="text-area"
          rows="3"
          value={tempComment}
        ></textarea>
        <button>Post</button>
      </form>
    </section>
  );
}

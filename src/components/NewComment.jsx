import { useEffect, useState } from "react";
import { postComment } from "../utils/axiosFunctions";
import CommentMessage from "./CommentMessage";

export default function NewComment({
  article_id,
  username,
  setCurrentComments,
}) {
  const [newComment, setNewComment] = useState(null);
  const [tempComment, setTempComment] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [commentMessage, setCommentMessage] = useState(null);
  const [lockButton, setLockButton] = useState(false);

  useEffect(() => {
    if (newComment !== null && formSubmitted) {
      postComment(article_id, { username: username, body: newComment }).then(
        (postedComment) => {
          setCommentMessage("success");
          setLockButton(false);
          setCurrentComments((currentComments) => {
            const updatedComments = [postedComment, ...currentComments];
            return updatedComments;
          });
        }
      );
    }
    setNewComment(null);
  }, [formSubmitted]);

  function handleSubmit(e) {
    e.preventDefault();
    switch (true) {
      case tempComment.length > 250:
        setCommentMessage("length");
        break;
      case tempComment === "":
        setCommentMessage("empty");
        break;
      default:
        setLockButton(true);
        setCommentMessage("waiting");
        setNewComment(tempComment);
        setTempComment("");
        setFormSubmitted(true);
    }
  }

  return (
    <section className="new-comment">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label htmlFor="new-comment">Post new comment:</label>
        <textarea
          onChange={(e) => {
            setCommentMessage(null);
            setTempComment(e.target.value);
            setFormSubmitted(false);
          }}
          id="new-comment"
          type="text-area"
          rows="3"
          value={tempComment}
        ></textarea>
        <CommentMessage commentMessage={commentMessage} />
        <div>
          <p>{250 - tempComment.length} characters remaining</p>
          <button disabled={lockButton}>Post</button>
        </div>
      </form>
    </section>
  );
}

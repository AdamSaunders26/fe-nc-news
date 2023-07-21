import { useState } from "react";
import { deleteComment } from "../utils/axiosFunctions";

export default function ModifyComment({ comment_id, setDeletedComment }) {
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  return (
    <section className="modify-comment">
      {deleteLoading ? <p>Deleting...</p> : null}
      {isError ? <p>Something went wrong. Refresh and try again.</p> : null}
      <button
        onClick={() => {
          setDeleteLoading(true);
          deleteComment(comment_id)
            .then((deletedComment_id) => {
              setDeleteLoading(false);
              setDeletedComment(deletedComment_id);
            })
            .catch((err) => {
              setIsError(true);
            });
        }}
        disabled={deleteLoading}
      >
        Delete
      </button>
    </section>
  );
}

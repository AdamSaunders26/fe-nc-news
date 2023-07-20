import { deleteComment } from "../utils/axiosFunctions";

export default function ModifyComment({ comment_id, setDeletedComment }) {
  return (
    <section className="modify-comment">
      <button
        onClick={() => {
          deleteComment(comment_id).then((deletedComment_id) => {
            setDeletedComment(deletedComment_id);
          });
        }}
      >
        Delete
      </button>
    </section>
  );
}

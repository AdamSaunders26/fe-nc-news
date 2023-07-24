import { convertDate } from "../utils/utilityFunctions";
import ModifyComment from "./ModifyComment";

export default function CommentCard({ comment, username, setDeletedComment, allUsers }) {
  const { author, body, created_at, votes, comment_id } = comment;
  const userImages = {}
  allUsers.forEach(user => {
    userImages[user.username] = user.avatar_url;
  })
  
  return (
    <section>
      <section className="comment-card">
        <p>{body}</p>
        <div>
          <p>{votes} votes</p>
          {/* <p>{author}</p> */}
          <p>{convertDate(created_at)}</p>
        </div>
      <section className="comment-user">
       <img src={userImages[author]} />
        <p>{author}</p>
        {username === author ? (
          <ModifyComment 
          comment_id={comment_id}
          setDeletedComment={setDeletedComment}
          />
          ) : null}
          </section>
      </section>
    </section>
  );
}

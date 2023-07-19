export default function CommentMessage({ commentMessage }) {
  switch (commentMessage) {
    case "length":
      return <p>This comment is too long</p>;
    case "empty":
      return <p>Cannot submit empty comments</p>;
    case "waiting":
      console.log("here");
      return <p>Post being submitted...</p>;
    case "success":
      return <p>Post successful!</p>;
    default:
      return null;
  }
}

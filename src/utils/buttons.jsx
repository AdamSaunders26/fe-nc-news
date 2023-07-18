import {
  BiDownvote,
  BiUpvote,
  BiSolidDownvote,
  BiSolidUpvote,
} from "react-icons/bi";

export function DownvoteButton({ handleVotes, hasClicked }) {
  return (
    <button
      onClick={() => {
        handleVotes(-1);
      }}
      disabled={hasClicked[0]}
      className={hasClicked[1] === -1 ? "downvote-clicked" : "downvote"}
    >
      <BiDownvote />
    </button>
  );
}

export function UpvoteButton({ handleVotes, hasClicked }) {
  return (
    <button
      onClick={() => {
        handleVotes(1);
      }}
      disabled={hasClicked[0]}
      className={hasClicked[1] === 1 ? "upvote-clicked" : "upvote"}
    >
      <BiUpvote />
    </button>
  );
}

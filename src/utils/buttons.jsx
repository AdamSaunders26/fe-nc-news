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
        switch (true) {
          case hasClicked[0]:
            handleVotes(-2);
            break;
          case !hasClicked[0]:
            handleVotes(-1);
            break;
          case hasClicked[0] && hasClicked[1] < 0:
            handleVotes(0);

            break;
        }
      }}
      disabled={hasClicked[0] && hasClicked[1] < 0}
      className={hasClicked[1] < 0 ? "downvote-clicked" : "downvote"}
    >
      <BiDownvote />
    </button>
  );
}

export function UpvoteButton({ handleVotes, hasClicked }) {
  return (
    <button
      onClick={() => {
        hasClicked[0] ? handleVotes(2) : handleVotes(1);
      }}
      disabled={hasClicked[0] && hasClicked[1] > 0}
      className={hasClicked[1] > 0 ? "upvote-clicked" : "upvote"}
    >
      <BiUpvote />
    </button>
  );
}

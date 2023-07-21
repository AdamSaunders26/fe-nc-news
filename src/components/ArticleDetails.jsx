import { useEffect, useState } from "react";
import { capitaliseString, convertDate } from "../utils/utilityFunctions";

import { patchArticle } from "../utils/axiosFunctions";
import { DownvoteButton, UpvoteButton } from "../utils/buttons";

export default function ArticleDetails({ article }) {
  const {
    title,
    topic,
    author,
    body,
    comment_count,
    created_at,
    votes,
    article_img_url,
    article_id,
  } = article;
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [hasClicked, setHasClicked] = useState([false, 0]);
  const [isError, setIsError] = useState(false);

  function handleVotes(inc_vote) {
    setHasClicked(() => {
      const newHasClicked = [...hasClicked];
      inc_vote === 0 ? (newHasClicked[0] = false) : (newHasClicked[0] = true);
      newHasClicked[1] = inc_vote;
      return newHasClicked;
    });
    setCurrentVotes(currentVotes + inc_vote);
    patchArticle(article_id, inc_vote)
      .then(({ votes }) => {
        setCurrentVotes(votes);
      })
      .catch((err) => {
        setIsError(true);
      });
  }

  return (
    <article className="article-details">
      <h3>{title}</h3>
      <div>
        <p>{author}</p>
        <p>{capitaliseString(topic)}</p>
        <p>{convertDate(created_at)}</p>
      </div>
      <img src={article_img_url} />
      <p>{body}</p>
      <div>
        <div className="article-votes">
          <p>{currentVotes} votes</p>
          <UpvoteButton handleVotes={handleVotes} hasClicked={hasClicked} />
          <DownvoteButton handleVotes={handleVotes} hasClicked={hasClicked} />
        </div>
        <p>{comment_count} comments</p>
      </div>
      {isError ? (
        <p style={{ "align-self": "center" }}>
          Vote not registered, refresh page and try again
        </p>
      ) : null}
    </article>
  );
}

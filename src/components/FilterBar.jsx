import { useEffect, useState } from "react";
import { capitaliseString } from "../utils/utilityFunctions";
import { useNavigate } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/axiosFunctions";

export default function FilterBar({
  allTopics,
  setAllArticles,
  setLoading,
  setIsError,
}) {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { topic } = useParams("all");
  const [currentTopic, setCurrentTopic] = useState(topic);
  const [sortby, setSortby] = useState(searchParams.get("sortby"));
  const [order, setOrder] = useState(searchParams.get("order"));

  useEffect(() => {
    setLoading(true);
    getArticles([currentTopic, sortby, order])
      .then((newArticles) => {
        setAllArticles(newArticles);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError((isError) => {
          const newError = [...isError];
          newError[0] = true;
          newError[1] = err.response;
          return newError;
        });
      });
    navigate(
      `/articles/topics/${currentTopic}?sortby=${sortby}&order=${order}`
    );
  }, [currentTopic, sortby, order]);

  return (
    <section className="filter-bar">
      <section>
        <label htmlFor="topics">
          <h2>Topic: </h2>
        </label>
        <select
          id="topic"
          onChange={(e) => {
            setCurrentTopic(e.target.value);
          }}
        >
          {allTopics.map((topic) => {
            return (
              <option
                key={topic}
                value={topic}
                selected={topic == currentTopic}
              >
                {capitaliseString(topic)}
              </option>
            );
          })}
        </select>
      </section>
      <section>
        <label htmlFor="sortby">
          <h2>Sort by: </h2>
        </label>
        <select
          onChange={(e) => {
            setSortby(e.target.value);
          }}
          id="sortby"
        >
          <option value="created_at">Date</option>
          <option value="title">Title</option>
          <option value="topic">Topic</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      </section>
      <section>
        <label htmlFor="order">
          <h2>Order: </h2>
        </label>
        <button
          onClick={() => {
            order === "desc" ? setOrder("asc") : setOrder("desc");
          }}
          id="order"
          value={order}
        >
          {order === "desc" ? "Descending" : "Ascending"}
        </button>
      </section>
    </section>
  );
}

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
  const [topic, setTopic] = useState("all");
  const [sortby, setSortby] = useState(searchParams.get("sortby"));
  const [order, setOrder] = useState(searchParams.get("order"));

  useEffect(() => {
    setLoading(true);
    getArticles([topic, sortby, order])
      .then((newArticles) => {
        setAllArticles(newArticles);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(err.response);
      });
  }, [topic, sortby, order]);

  return (
    <section className="filter-bar">
      <section>
        <label htmlFor="topics">
          <h2>Topic: </h2>
        </label>
        <select
          id="topic"
          onChange={(e) => {
            setTopic(e.target.value);
            navigate(
              `/articles/topics/${e.target.value}?sortby=${sortby}&order=${order}`
            );
          }}
        >
          {allTopics.map((topic) => {
            return (
              <option key={topic} value={topic}>
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
            navigate(
              `/articles/topics/${topic}?sortby=${e.target.value}&order=${order}`
            );
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
          onClick={(e) => {
            order === "desc" ? setOrder("asc") : setOrder("desc");
            navigate(
              `/articles/topics/${topic}?sortby=${sortby}&order=${e.target.value}`
            );
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

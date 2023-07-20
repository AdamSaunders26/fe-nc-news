import { useEffect, useState } from "react";
import { capitaliseString } from "../utils/utilityFunctions";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/axiosFunctions";

export default function FilterBar({ allTopics, setAllArticles, setLoading }) {
  const navigate = useNavigate();
  const { topic = "all" } = useParams();
  const [currentTopic, setCurrentTopic] = useState(topic);

  useEffect(() => {
    setLoading(true);
    getArticles(currentTopic).then((newArticles) => {
      setAllArticles(newArticles);
      setLoading(false);
    });
    navigate(`/articles/topics/${currentTopic}`);
  }, [currentTopic]);

  return (
    <section className="filter-bar">
      <label htmlFor="topics">
        <h2>Choose topic: </h2>
      </label>
      <select
        id="topic"
        onChange={(e) => {
          setCurrentTopic(e.target.value);
        }}
      >
        {allTopics.map((topic) => {
          return (
            <option key={topic} value={topic} selected={topic == currentTopic}>
              {capitaliseString(topic)}
            </option>
          );
        })}
      </select>
    </section>
  );
}

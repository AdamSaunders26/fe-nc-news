import { useEffect, useState } from "react";
import { capitaliseString } from "../utils/utilityFunctions";
import { Link, useNavigate } from "react-router-dom";

export default function FilterBar({
  allTopics,
  setCurrentTopic,
  currentTopic,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/articles/topics/${currentTopic}`);
  }, [currentTopic]);

  return (
    <section className="filter-bar">
      <label htmlFor="topics">Choose topic: </label>
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

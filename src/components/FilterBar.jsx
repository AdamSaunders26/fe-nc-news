import { capitaliseString } from "../utils/utilityFunctions";
import {Link} from 'react-router-dom'

export default function FilterBar({ allTopics }) {
  return (
    <section className="filter-bar">
      <label htmlFor="topics">Choose topic: </label>
      <select id="topic">
        <option value="all">All</option>
        {allTopics.map((topic) => {
          return <option value={topic}>{capitaliseString(topic)}</option>;
        })}
      </select>
    </section>
  );
}

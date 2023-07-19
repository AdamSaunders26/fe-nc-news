import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import { getArticles, getTopics } from "./utils/axiosFunctions";
import SingleArticle from "./components/SingleArticle";
import FilterBar from "./components/FilterBar";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles);
      setLoading(false);
    });
    getTopics().then((topics) => {
      setAllTopics(() => {
        return topics.map((topic) => {
          return topic.slug;
        });
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/articles"
            element={
              <section style={{ display: "flex" }}>
                <ArticlesList loading={loading} allArticles={allArticles} />
                <FilterBar allTopics={allTopics} />
              </section>
            }
          />
          <Route
            path="/articles/:topic"
            element={
              <section style={{ display: "flex" }}>
                <ArticlesList loading={loading} allArticles={allArticles} />
                <FilterBar allTopics={allTopics} />
              </section>
            }
          />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

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
  const [usernameLoggedIn, setUsernameLoggedIn] = useState("happyamy2016");
  const [allTopics, setAllTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("all");

  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles);
      setLoading(false);
    });
    getTopics().then((topics) => {
      setAllTopics(() => {
        const topicsAndAll = [{ slug: "all" }, ...topics];
        return topicsAndAll.map((topic) => {
          return topic.slug;
        });
      });
    });
  }, []);

  return (
    <div className="app">
      <section className="header-nav">
        <Header />
        <Navbar currentTopic={currentTopic} />
      </section>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/articles"
            element={
              <section style={{ display: "flex" }}>
                <ArticlesList loading={loading} allArticles={allArticles} />
                <FilterBar
                  allTopics={allTopics}
                  setCurrentTopic={setCurrentTopic}
                  currentTopic={currentTopic}
                />
              </section>
            }
          /> */}
          <Route
            path="/articles/:article_id"
            element={<SingleArticle username={usernameLoggedIn} />}
          />
          <Route
            path="/articles/topics/:topic"
            element={
              <section style={{ display: "flex" }}>
                <ArticlesList
                  loading={loading}
                  allArticles={allArticles}
                  setCurrentTopic={setCurrentTopic}
                />
                <FilterBar
                  allTopics={allTopics}
                  setCurrentTopic={setCurrentTopic}
                  currentTopic={currentTopic}
                />
              </section>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

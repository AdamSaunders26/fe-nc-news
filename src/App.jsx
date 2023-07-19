import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import { getArticles } from "./utils/axiosFunctions";
import SingleArticle from "./components/SingleArticle";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usernameLoggedIn, setUsernameLoggedIn] = useState("happyamy2016");

  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles);
      setLoading(false);
    });
  }, []);
  return (
    <div className="app">
      <section className="header-nav">
        <Header />
        <Navbar />
      </section>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/articles"
            element={
              <ArticlesList loading={loading} allArticles={allArticles} />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<SingleArticle username={usernameLoggedIn} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

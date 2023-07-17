import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import { getArticles } from "./utils/getFunctions";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles);
      setLoading(false)
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
            element={<ArticlesList loading={loading} allArticles={allArticles} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;

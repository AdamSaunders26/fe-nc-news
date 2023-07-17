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

  useEffect(() => {
    getArticles().then((articles) => {
      setAllArticles(articles);
    });
  }, []);
  return (
    <body>
      <Header />
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/articles"
            element={<ArticlesList allArticles={allArticles} />}
          />
        </Routes>
      </main>
    </body>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import { getTopics, getUsers } from "./utils/axiosFunctions";
import SingleArticle from "./components/SingleArticle";
import FilterBar from "./components/FilterBar";
import ErrorHandler from "./components/ErrorHandler";
import UserList from "./components/UserList";

function App() {
  const [allArticles, setAllArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLoading, setUserLoading] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [usernameLoggedIn, setUsernameLoggedIn] = useState("happyamy2016");
  const [allTopics, setAllTopics] = useState([]);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    getTopics().then((topics) => {
      setAllTopics(() => {
        const topicsAndAll = [{ slug: "all" }, ...topics];
        return topicsAndAll.map((topic) => {
          return topic.slug;
        });
      });
    });
    getUsers().then((users) => {
      setAllUsers(users);
      setUserLoading(false);
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
            path="/articles/:article_id"
            element={<SingleArticle username={usernameLoggedIn} />}
          />
          <Route
            path="/articles/topics/:topic"
            element={
              <section>
                <ArticlesList
                  loading={loading}
                  allArticles={allArticles}
                  setAllArticles={setAllArticles}
                  isError={isError}
                />
                <FilterBar
                  allTopics={allTopics}
                  setAllArticles={setAllArticles}
                  setLoading={setLoading}
                  setIsError={setIsError}
                />
              </section>
            }
          />
          <Route
            path="/users"
            element={<UserList allUsers={allUsers} userLoading={userLoading} />}
          />
          <Route path="/*" element={<ErrorHandler />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import Header from "./Header";
import CommitsList from "./CommitsList";

const Container = () => {
  const [userData, setUserData] = useState({});
  const [dataCommits, setDataCommits] = useState([]);

  const getUserData = async () => {
    const response = await fetch("https://api.github.com/users/jfelizzolat");
    if (response.ok) {
      const result = await response.json();
      setUserData({
        avatar: result.avatar_url,
        name: result.name,
        username: result.login,
        email: result.email,
        website: result.blog,
      });
    }
  };

  const getDataCommits = async () => {
    const response = await fetch(
      " https://api.github.com/repos/jfelizzolat/show-history-commits/commits"
    );
    if (response.ok) {
      const result = await response.json();
      setDataCommits(result);
    }
  };

  useEffect(() => {
    getUserData();
    getDataCommits();
  }, []);

  return (
    <div className="layout">
      <Header data={userData} onClickRefresh={getDataCommits} />
      <CommitsList data={dataCommits} />
    </div>
  );
};

export default Container;

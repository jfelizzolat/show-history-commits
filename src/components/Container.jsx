import React, { useState, useEffect } from "react";
import Header from "./Header";
import CommitsList from "./CommitsList";
import swal from "@sweetalert/with-react";

const Container = () => {
  const [userData, setUserData] = useState({});
  const [dataCommits, setDataCommits] = useState([]);
  const [loading, setLoading] = useState(false);

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
    } else {
      swal(
        "Oops!",
        "Ocurrió un error al cargar la información del usuario",
        "error"
      );
    }
  };

  const getDataCommits = async () => {
    setLoading(true);
    const response = await fetch(
      " https://api.github.com/repos/jfelizzolat/show-history-commits/commits"
    );
    if (response.ok) {
      const result = await response.json();
      setDataCommits(result);
    } else {
      swal(
        "Oops!",
        "Ocurrió un error al cargar el listado de commits",
        "error"
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
    getDataCommits();
  }, []);

  return (
    <div className="layout">
      <Header
        data={userData}
        onClickRefresh={getDataCommits}
        loading={loading}
      />
      <CommitsList data={dataCommits} />
    </div>
  );
};

export default Container;

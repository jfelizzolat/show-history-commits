import React from "react";
import Header from "./Header";

const Container = () => {
  const data_user = {
    avatar:
      "https://i1.wp.com/www.culturaldevoto.com.ar/wp-content/plugins/userswp/assets/images/no_profile.png?ssl=1",
    name: "Jeffrey Felizzola Tapia",
    username: "jfelizzolat",
    email: "jfelizzolat@gmail.com ",
    website: "https://jfelizzolat.dev",
  };
  return (
    <>
      <Header data={data_user} />
    </>
  );
};

export default Container;

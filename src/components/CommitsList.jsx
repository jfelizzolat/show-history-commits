import React from "react";
import "../assets/sass/CommitsList.scss";

const CommitsList = () => {
  return (
    <div className="list">
      <ul className="list__content">
        <li className="list__item list__header">Listado de commits</li>
        <li className="list__item">
          <div className="avatar">
            <img
              src="https://i1.wp.com/www.culturaldevoto.com.ar/wp-content/plugins/userswp/assets/images/no_profile.png?ssl=1"
              alt=""
              className="avatar__image avatar--small"
            />
          </div>
          <div className="list__text">
            <p className="list--title">Mensaje del commit</p>
            <span className="list--detail">
              Nombre completo del autor del commit
            </span>
          </div>
          <span className="list--date">06 de Agosto del 2021</span>
        </li>
      </ul>
    </div>
  );
};

export default CommitsList;

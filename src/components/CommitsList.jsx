import React from "react";
import "../assets/sass/CommitsList.scss";

const CommitsList = ({ data }) => {
  return (
    <div className="list">
      <ul className="list__content">
        <li className="list__item list__header">Listado de commits</li>
        {data.map((item) => {
          return (
            <li className="list__item">
              <div className="avatar">
                <img
                  src={item.committer.avatar_url}
                  alt={item.commit.name}
                  className="avatar__image avatar--small"
                />
              </div>
              <div className="list__text">
                <p className="list--title">{item.commit.message}</p>
                <span className="list--detail">
                  {item.committer.login} {" - "}
                  <i>{item.commit.committer.name}</i>
                </span>
              </div>
              <span className="list--date">
                {new Date(item.commit.committer.date).toLocaleString()}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CommitsList;

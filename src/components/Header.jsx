import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToggleOff,
  faToggleOn,
  faRedoAlt,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/sass/Header.scss";

const Header = ({ data }) => {
  const { avatar, name, username, email, website } = data;
  const toggle_off = <FontAwesomeIcon icon={faToggleOff} />;
  const toggle_on = <FontAwesomeIcon icon={faToggleOn} />;
  const refresh = <FontAwesomeIcon icon={faRedoAlt} />;
  return (
    <div className="header">
      <div className="header__content">
        <div className="header__data">
          <div className="avatar">
            <img
              src={avatar}
              alt={name}
              className="avatar__image avatar--large"
            />
          </div>
          <div className="header__info">
            <div className="text">
              <label className="text__label">Nombre</label>
              <span className="text__user">{name}</span>
            </div>
            <div className="text">
              <label className="text__label">Usuario Github</label>
              <span className="text__user">{username}</span>
            </div>
            <div className="text">
              <label className="text__label">Email</label>
              <span className="text__user">{email}</span>
            </div>
            <div className="text">
              <label className="text__label">Sitio web</label>
              <a
                href={website}
                target="_blank"
                rel="noreferrer"
                className="text__link"
              >
                <span className="text__user">{website}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="header__actions">
          <button type="button" className="toggle">
            <div className="toggle__icon">{toggle_off}</div>
            <span className="toggle__text">Dark mode</span>
          </button>
          <button type="button" className="btn btn__outline">
            <span className="btn--text-icon">Cargar commits</span>
            {refresh}
          </button>
        </div>
      </div>
      {/* <div className="header__list">
        <span className="header__list--text">Listado de commits</span>
      </div> */}
    </div>
  );
};

export default Header;

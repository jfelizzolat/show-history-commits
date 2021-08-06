import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/sass/Splash.scss';

const Splash = () => {
  const element = <FontAwesomeIcon icon={faRedoAlt} spin />;
  return (
    <div className='splash'>
      <div className='splash__icon'>{element}</div>
      <span className='splash__text bold'>Cargando</span>
      <span className='splash__text'>Listado de commits</span>
    </div>
  );
};

export default Splash;

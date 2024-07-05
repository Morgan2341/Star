import React, { useState } from 'react';
import Modal from './Modal';
import './FilmItem.css';

function FilmItem({ film }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="film-item">
      <h3>{film.title}</h3>
      <p>Çıxış ili: {film.release_date}</p>
      <button onClick={handleModalToggle}>Ətraflı</button>
      {showModal && <Modal film={film} handleModalToggle={handleModalToggle} />}
    </div>
  );
}

export default FilmItem;

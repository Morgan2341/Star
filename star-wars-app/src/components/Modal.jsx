import React from 'react';
import './Modal.css';

function Modal({ film, handleModalToggle }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={handleModalToggle}>&times;</span>
        <h2>{film.title}</h2>
        <p><strong>Çıxış ili:</strong> {film.release_date}</p>
        <p><strong>Rejissor:</strong> {film.director}</p>
        <p><strong>Prodyuser:</strong> {film.producer}</p>
        <p><strong>About:</strong> {film.opening_crawl}</p>
      </div>
    </div>
  );
}

export default Modal;

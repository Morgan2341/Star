import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilmItem from './FilmItem';
import './FilmList.css';

function FilmList() {
  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFilms = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://swapi.dev/api/films/`);
        setFilms(response.data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  return (
    <div className="film-list">
      {films.map(film => (
        <FilmItem key={film.episode_id} film={film} />
      ))}
    </div>
  );
}

export default FilmList;

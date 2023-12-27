import React from 'react';
import {useNavigate, Link} from 'react-router-dom';

export default function SavedList(props) {
  const navigate = useNavigate();
  const [saved] = props.list
  console.log(props.list)
  console.log(saved)
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {saved.map(movie => (
        <span className="saved-movie" onClick={() => navigate(`/movies/${movie.id}`)}>{movie.title}</span>
      ))}
      <div className="home-button" onClick={() => navigate('/')}>Home</div>
    </div>
  );
}

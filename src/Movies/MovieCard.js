import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


export default function MovieCard (props) {
  const { id, title, director, metascore, stars } = props.movie;
  const [saveCard, setSaveCard] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setSaveCard(props.saveCard)
  }, [props])

  return (
    <div className={saveCard ? "save-wrapper" : ""}>
      <div className="movie-card" onClick={!saveCard ? () => navigate(`/movies/${id}`) : null}>
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        {saveCard ? <h3>Actors</h3> : null}
        {saveCard ? stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))
          : null}
        
      </div>
      {saveCard ? <div className="save-button" onClick={() => props.saveMovie(id)}>Save</div> : null}
    </div>
  )
}

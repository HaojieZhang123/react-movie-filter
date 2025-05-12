import { useState } from 'react'

const movieArray = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  return (
    <>
      <h1>Movies</h1>

      <div className="search-box">

        <input type="text" />

        <select name="genre" id='genre-filter'>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </div>

      <div className="movie-container">
        <ul>
          {movieArray.map((element, index) => (
            <li key={`movie-${index}`}>
              {element.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App

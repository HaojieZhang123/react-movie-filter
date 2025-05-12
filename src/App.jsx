import { useState, useEffect } from 'react'
import Header from './components/Header';
import ListItem from './components/ListItem';

// array iniziale
const movieArray = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  // Copia dell'array iniziale
  const [movies, setMovies] = useState(movieArray);
  // variabile di stato per il genere filtrato
  const [genre, setGenre] = useState('');
  // variabile di stato per la ricerca per titolo
  const [search, setSearch] = useState('');
  // array con i film filtrati, e quelli mostrati in pagina
  const [filteredMovies, setFilteredMovies] = useState(movies);

  // Adding new entries
  const [newTitle, setNewTitle] = useState('');
  const [newGenre, setNewGenre] = useState('');
  const addNewMovie = (e) => {
    e.preventDefault();
    const newMovie = { title: newTitle, genre: newGenre };
    setMovies([...movies, newMovie]);
    setNewTitle('');
    setNewGenre('');
  }

  // filtro dell'array movies a seconda di genre. Restituire il risultato a filteredMovies per essere mostrato a schermo
  useEffect(() => {
    const filtered = movies.filter((element) =>
      element.genre.includes(genre)
    )
    setFilteredMovies(filtered)
  }, [movies, genre])

  // filtro per titolo, stessa idea di genere, applicato con lowercase per essere case insensitive
  useEffect(() => {
    const filtered = movies.filter((element) =>
      element.title.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredMovies(filtered)
  }, [movies, search])

  return (
    <>
      <Header />

      {/* Box di ricerca */}
      <div className="container">
        <div className="search-box">

          {/* box di ricerca per il titolo */}
          <input
            type="text"
            placeholder='Cerca per titolo'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* ricerca per genere */}
          <select
            name="genre"
            id='genre-filter'
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            {/* Il controllo del genere avviene per controllo di inclusione di substring. Per selezionare tutti, uso una stringa vuota come sottostringa di controllo */}
            <option value="">Scegli il genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>

        </div>
      </div>

      {/* Movie list */}
      <div className="container">
        <div className="movie-container">
          <ul>
            {filteredMovies.map((element, index) => (
              // <li key={`movie-${index}`}>
              //   {element.title}
              // </li>
              <ListItem key={`movie-${index}`} element={element} />
            ))}
          </ul>
        </div>
      </div>

      {/* Add new movie */}
      <div className="container">
        <form onSubmit={addNewMovie}>
          <h2>Add a new entry</h2>
          <div className='input-container'>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <select
              value={newGenre}
              onChange={(e) => setNewGenre(e.target.value)}
            >
              <option value="">Scegli il genere</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
          </div>
          <button>Add</button>
        </form>
      </div>



    </>
  )
}

export default App

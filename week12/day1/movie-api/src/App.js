import './App.css';
import React, {useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import Search from './components/Search'
import MovieListHeading from './components/MovieListHeading'
// import About from './components/About'

function App() {

  const [movies, setMoives] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async() => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=e6e775bb`

      const response = await fetch(url);
      const resJson = await response.json();
      if (resJson.Search) {
        setMoives(resJson.Search);
      }
  };

  useEffect(() => {
      getMovieRequest(searchValue);
  },[searchValue]);


  return (
    <div className="container-fluid movie-app">
            <div className="row d-flex align-items-center mt-4 mb-4">
                <MovieListHeading heading="Movies"/>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            </div>
            <div className="row">
                <MovieList movies={movies} />
            </div>
    </div>
  )
};

export default App;

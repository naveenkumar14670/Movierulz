import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';
import Searchbar from './Components/Searchbar';
import Categories from './Components/Categories';
import Movies from './Components/Movies';
import data from './Components/data.json';

function App() {
	const [movies, setMovies] = useState(data.movies);
	const [category, setCategory] = useState('All');

	function displayMovies(name) {
		changeCategory('All');
		let newMovies = data.movies.filter((movie) => {
			return movie.name.toLowerCase().includes(name.toLowerCase());
		});
		setMovies(newMovies);
	}

	function changeCategory(name) {
		console.log(name);
		setCategory(name);
		if (name === 'All') {
			setMovies(data.movies);
		} else {
			let newMovies = data.movies.filter((movie) => {
				for (let i = 0; i < movie.genre.length; i++) {
					if (movie.genre[i] === name) return true;
				}
				return false;
			});
			setMovies(newMovies);
		}
	}

	return (
		<div className='App'>
			<NavBar />
			<Searchbar displayMovies={displayMovies} />
			<div className='row w-100'>
				<Categories category={category} changeCategory={changeCategory} />
				<div className='col-2'></div>
				<Movies movies={movies} />
			</div>
		</div>
	);
}

export default App;

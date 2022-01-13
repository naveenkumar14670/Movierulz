import React from 'react';
import GetCard from './MovieCard';

function Movies({ movies }) {
	return (
		<div className='col-9'>
			<div className='d-flex flex-wrap'>
				{movies.map((movie, i) => (
					<GetCard key={i} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default Movies;

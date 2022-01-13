import React from 'react';
import { FormGroup, Input } from 'reactstrap';

function Searchbar({ displayMovies }) {
	return (
		<div className='ml-1 pl-5 pr-5 pt-3 pb-3'>
			<FormGroup>
				<Input
					placeholder='Search Movies....'
					onChange={(e) => displayMovies(e.target.value)}
				/>
			</FormGroup>
		</div>
	);
}

export default Searchbar;

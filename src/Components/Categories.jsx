import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const buttons = [
	{ name: 'All', color: 'primary' },
	{ name: 'Action', color: 'danger' },
	{ name: 'Adventure', color: 'warning' },
	{ name: 'Horror', color: 'dark' },
	{ name: 'Comedy', color: 'success' },
];

function Categories({ category, changeCategory }) {
	return (
		<div className='col-1'>
			<ButtonGroup vertical>
				{buttons.map((button) => (
					<Button
						key={button.name}
						color={button.name === category ? button.color : 'light'}
						className='ml-5 p-4 shadow-none'
						active
						onClick={() => changeCategory(button.name)}
					>
						{button.name}
					</Button>
				))}
			</ButtonGroup>
		</div>
	);
}

export default Categories;

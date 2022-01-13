import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function getCard({ movie }) {
	return (
		<div>
			<Card className='MyCard m-2' style={{ width: 250, height: 450 }}>
				<CardImg top width='100%' src={movie.url} alt='Image' />
				<CardBody>
					<CardTitle tag='h5'>{movie.name}</CardTitle>
					<CardSubtitle tag='h6' className='mb-2 text-muted'>
						{movie.genre.map((g, i) => (
							<span key={i}>{`| ${g}`}</span>
						))}
					</CardSubtitle>
				</CardBody>
			</Card>
		</div>
	);
}

export default getCard;

import React from 'react';
import {Link} from 'react-router-dom';

import sweater from '../images/women/sweater.png';
import shirts from '../images/women/top.png';
import shorts from '../images/women/shorts.png';
import jeans from '../images/women/jeans.png';
import outwear from '../images/women/outwear.png';
import tshirt from '../images/women/tshirt.png';
import trousers from '../images/women/trousers.png'

export class Women extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (
			<div className='container'>
				<div className='content center'>
					<h1>YOUR STYLE MAP</h1>
				</div>

				<div className='content flex men hover-opacity'>
				<Link to={'/products'}>
					<div className='men'>
						<img className='image-full' src={jeans}/>
						<div className='card-divs'><h4>Jeans</h4></div>
					</div>
				</Link>

					<div>

						<div className='flex'>
						<Link to={'/products'}>
							<div className='men'>
								<img className='image-full' src={sweater}/>
								<div className='card-divs'><h4>Sweaters & Sweatshirts</h4></div>
							</div>
							</Link>
						<Link to={'/products'}>
							<div className='men'>
								<img className='image-full' src={shirts}/>
								<div className='card-divs'><h4>Shirts</h4></div>
							</div>
							</Link>
						<Link to={'/products'}>
							<div className='men'>						
								<img className='image-full' src={shorts}/>
								<div className='card-divs'><h4>Shorts</h4></div>
							</div>
							</Link>

						</div>
						<div className='flex'>
						<Link to={'/products'}>
							<div className='men'>
								<img className='image-full' src={outwear}/>
								<div className='card-divs'><h4>Outwear</h4></div>
							</div>
							</Link>
						<Link to={'/products'}>
							<div className='men'>
								<img className='image-full' src={tshirt}/>
								<div className='card-divs'><h4>T-Shirts & Graphics</h4></div>
							</div>
							</Link>
						<Link to={'/products'}>
							<div className='men'>						
								<img className='image-full' src={trousers}/>
								<div className='card-divs'><h4>Trousers</h4></div>
							</div>
							</Link>

						</div>


					</div>
					
				</div>
			</div>
			)
	}
}
import React from 'react';
import {Link} from 'react-router-dom';

import sweater from '../images/men/sweater.png';
import shirts from '../images/men/shirt.png';
import shorts from '../images/men/shorts.png';
import jeans from '../images/men/jeans.jpg';
import outwear from '../images/men/outwear.png';
import tshirt from '../images/men/tshirt.png';
import trousers from '../images/men/trousers.png';
import belt from '../images/men/belt.png';
import accessories from '../images/men/accessories.png';
import shoes from '../images/men/shoes.png';
import jacket from '../images/men/jacket.png';


export class Men extends React.Component {
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

				<div className='content flex men verticalpadding hover-opacity'>
					<Link to={'/products'}>
					<div className='men'>
						<img className='image-full' src={belt}/>
						<div className='card-divs'><h4>Belts</h4></div>
					</div>
					</Link>
					<Link to={'/products'}>
					<div className='men'>
						<img className='image-full' src={shoes}/>
						<div className='card-divs'><h4>Shoes</h4></div>
					</div>
					</Link>
					<Link to={'/products'}>
					<div className='men'>
						<img className='image-full' src={accessories}/>
						<div className='card-divs'><h4>Accessories</h4></div>
					</div>
					</Link>
					<Link to={'/products'}>
					<div className='men'>
						<img className='image-full' src={jacket}/>
						<div className='card-divs'><h4>Jackets</h4></div>
					</div>
					</Link>
				</div>
			</div>
			)
	}
}
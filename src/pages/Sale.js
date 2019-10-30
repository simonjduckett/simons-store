import React from 'react';
import {Link} from 'react-router-dom';

import { Banner } from '../components/Banner.js';
import womensale from '../images/womensale.png';
import mensale from '../images/mensale.png';



export class Sale extends React.Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (

			<div className='container'>

				<Banner />

				<div className='container'>
					<div className='content flex'>
						<div className='hover-opacity side-padding'>
						<Link to={'/men'}>
							<img className='image-full' src={mensale}/>
							<div className='card-divs'><h4>SHOP MEN</h4></div>
						</Link>
						</div>

						<div className='hover-opacity side-padding'>
						<Link to={'/women'}>
							<img className='image-full' src={womensale}/>
							<div className='card-divs'><h4>SHOP WOMEN</h4></div>
						</Link>
						</div>
					</div>

				</div>

			</div>

			)
	}
}
import React from 'react';
import {Link} from 'react-router-dom';

import menpic from '../images/men3.jpg';
import womenpic from '../images/women2.jpg';
import kidspic from '../images/kids2.jpg';

import { Banner } from '../components/Banner.js';


export class Home extends React.Component {
	render() {
		return (
			<div className='container'>

				<Banner />

				<div className='container'>
					<div className='content flex gender'>
						
							<div className='gender-third hover-opacity'>
								<Link to={'/men'}>
									<img className='image-full' src={menpic}/>
									<div className='card-divs'>
										<h4>SHOP MEN</h4>
									</div>
								</Link>
							</div>
						


						<div className='gender-third hover-opacity'>
							<Link to={'/women'}>
								<img className='image-full' src={womenpic}/>
								<div className='card-divs'>
									<h4>SHOP WOMEN</h4>
								</div>
							</Link>
						</div>

						<div className='gender-third hover-opacity'>
							<Link to={'/kids'}>
								<img className='image-full' src={kidspic}/>
								<div className='card-divs'>
									<h4>SHOP KIDS</h4>
								</div>
							</Link>
						</div>
					</div>
					
				</div>
			</div>
			)
	}
}
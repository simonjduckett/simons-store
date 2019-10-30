import React from 'react';
import {Link} from 'react-router-dom';
import Bannerpic from '../images/banner.png';


export class Banner extends React.Component {
	render() {
		return (
				<div className='banner'>
					<img className='image-full' src={Bannerpic}/>
					<div className='overlay-title center'>
						<div className='trans-bg'>
							<div className='title'>
								<div className='small-title'>
									<i>End of season sale</i>
								</div>
								<h1>UP TO 50% OFF SELECTED ITEMS</h1>

								<div className='title-links'><Link to={'/men'}>SHOP MEN</Link></div>
								<div className='title-links'><Link to={'/women'}>SHOP WOMEN</Link></div>
							</div>
						</div>

					</div>
				</div>
			)
	}
}
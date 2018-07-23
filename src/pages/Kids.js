import React from 'react';

import hoodie from '../images/kids/hoodie-boys.png';
import jumper from '../images/kids/jumper-boys.png';
import jeans from '../images/kids/jeans-boys.png';
import siblins from '../images/kids/siblins.png';
import boys from '../images/kids/boys.png';
import girls from '../images/kids/girls.png';
import jeans2 from '../images/kids/jeans-boys2.png';
import tshirt from '../images/kids/tshirt-boys.png';
import tshirt2 from '../images/kids/tshirt2-boys.png';

import tshirt_girls from '../images/kids/tshirt-girls.png';
import tshirt_girls2 from '../images/kids/tshirt-girls2.png';
import tshirt_girls3 from '../images/kids/tshirt-girls3.png';
import jeans_girls from '../images/kids/jeans-girls.png';
import jeans_girls2 from '../images/kids/jeans-girls2.png';
import jacket_girls from '../images/kids/jacket-girls.png';

export class Kids extends React.Component {
	render() {
		return (
				<div className='container'>
					<div className='content center'>
						<h1>AUTHENTIC LOOKS FOR ALL AGES</h1>

					</div>

					<div className='content center'>
						<h2>BOYS</h2>
					</div>



						<div className='content flex verticalpadding'>
							<div className='men'>
								<img className='image-full' src={boys}/>
								<div className='card-divs'><h4>Jeans</h4></div>
							</div>

							<div>
								<div className='flex'>
									<div className='men'>
										<img className='image-full' src={tshirt}/>
										<div className='card-divs'><h4>T Shirt</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={jeans}/>
										<div className='card-divs'><h4>Jeans dark</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={jeans2}/>
										<div className='card-divs'><h4>Jeans grey</h4></div>
									</div>
								</div>


								<div className='flex'>
									<div className='men'>
										<img className='image-full' src={tshirt2}/>
										<div className='card-divs'><h4>T Shirt</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={hoodie}/>
										<div className='card-divs'><h4>Hoodie boys</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={jumper}/>
										<div className='card-divs'><h4>Jumper</h4></div>
									</div>
								</div>
							</div>

						</div>

					<div className='content center'>
						<h2>GIRLS</h2>
					</div>



						<div className='content flex verticalpadding'>


							<div>
								<div className='flex'>
									<div className='men'>
										<img className='image-full' src={tshirt_girls}/>
										<div className='card-divs'><h4>Stronger girls Tee</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={jeans_girls}/>
										<div className='card-divs'><h4>Skinny Jeans</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={jacket_girls}/>
										<div className='card-divs'><h4>Denim Jacket</h4></div>
									</div>
								</div>


								<div className='flex'>
									<div className='men'>
										<img className='image-full' src={tshirt_girls2}/>
										<div className='card-divs'><h4>Ocean T Shirt</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={jeans_girls2}/>
										<div className='card-divs'><h4>Slim Jeans</h4></div>
									</div>
									<div className='men'>
										<img className='image-full' src={tshirt_girls3}/>
										<div className='card-divs'><h4>Shirt</h4></div>
									</div>
								</div>
							</div>

							<div className='men'>
								<img className='image-full' src={girls}/>
								<div className='card-divs'><h4>Denim</h4></div>
							</div>

						</div>




				</div>
			)
	}
}
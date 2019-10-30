import React from 'react';
import { Product } from '../components/Product';
import jeans from '../images/kids/jeans-boys.png';

var x = 0;
export class Products extends React.Component {
		

	constructor(props) {
		super(props)

		//make array of products here
		this.state = {
		}

	}



	render() {
		return (

			<div className='container'>
				<div className='content flex'>
					<div id='filter'>
						<div>
							<h3>MEN</h3>
						</div>
						<div>
							<ul>
								<li>Jeans</li>
								<li>T-Shirts</li>
								<li>Collections</li>
								<li>Shirts</li>
								<li>New Arrivals</li>
								<li>Outerwear</li>
								<li>Sweaters & Sweatshirts</li>
								<li>Truckers & Sherpas</li>
								<li>Shorts</li>
								<li>Big & Tall</li>
							</ul>
						</div>
						<div>
							<h3>FILTERS</h3>
						</div>
						<div>
							<div className='check-title'>COLOR</div>
							<input type='checkbox' onChange={() => this.props.filterColor(this, 'Black')} /> Black <br />
							<input type='checkbox' /> Blue <br />
							<input type='checkbox' /> Dark Indigo <br />
							<input type='checkbox' /> Green <br />
						</div>
						<div>
							<div className='check-title'>SIZE</div>
							<input type='checkbox' /> 26 <br />
							<input type='checkbox' /> 27 <br />
							<input type='checkbox' /> 28 <br />
							<input type='checkbox' /> 29 <br />
							<input type='checkbox' /> 30 <br />
							<input type='checkbox' /> 31 <br />
							<input type='checkbox' /> 32 <br />
							<input type='checkbox' /> 33 <br />
							<input type='checkbox' /> 34 <br />
							<input type='checkbox' /> 35 <br />
						</div>
						<div>
							<div className='check-title'>FIT</div>
							<input type='checkbox' /> Slim <br />
							<input type='checkbox' /> Taper <br />
						</div>
						<div>
							<div className='check-title'>PRICE</div>
							<input type='checkbox' /> Under £50 <br />
							<input type='checkbox' /> £50 - £75 <br />
						</div>

					</div>
					<div>
						<div className='right'>
							<span>Sort By</span>
							<select id='select' value={this.props.selected} onChange={() => this.props.sort()}>
  								<option value="recommended">Recommended</option>
  								<option value="latest">Latest Arrival</option>
 		 						<option value="low">Price Low - High</option>
 		 						<option value="high">Price High - Low</option>
							</select>
						</div>
						<div>
							<div className='flex verticalpadding'>

								
									{this.props.Stuff.map((item) => {

											x++;
											return <Product product={item} key={x} addToBag={this.props.addToBag}/>
											
									})}
								

							</div>
						</div>

					</div>


				</div>



				
			</div>

			)
	}
}
import React from 'react';
import {Link} from 'react-router-dom';


export class Mini extends React.Component {


	close(){
		var x = document.getElementById('mini')

		x.style.display = 'none'
	}



	render() {
		return (
				<div id='mini'>
					<div id='mini-checkout-header'><h3 className='center'>Added To Bag</h3></div>
					<div>
						{this.props.minibag.map(x => {return <div className='flex'>
							<div className='half'><img className='miniimage' src={x.image} /></div>

							<div>
							<strong>{x.title}</strong><span id='mini-price'>£{x.price}.00</span><br />
							<span id='mini-color'>Colour: {x.color}</span><br />
							
							</div>


							</div>})}
					</div>
					<Link to={'./checkout'}><div className='center' id='viewbagbtn' onClick={this.close}>Checkout</div></Link>
				</div>
			)
	}
}
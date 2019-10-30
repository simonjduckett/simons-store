import React from 'react';
import paypal from '../images/paypal.png'
import { Checkout_product } from '../components/Checkout_product';

var y = 0;
var id = -1;

export class Checkout extends React.Component {
	


	constructor(props) {
		super(props)

		//shopping bag array
		this.state = {
		}


	}
	componentDidMount() {
		window.scrollTo(0, 0)
	}
	render() {
		return (

			<div className='container'>
					<div className='content center'>
						<h1>SHOPPING BAG</h1>
					</div>

					<div className='content flex padding-bottom'>

						<div style={{width:60 + '%'}}>
								<ul className='checkout-list'>
									{this.props.bag.map((item) => {
											y++;
											id++;
											return <Checkout_product product={item} key={y} id={id} removeFromBag={this.props.removeFromBag} changeCount={this.props.changeCount}/>

									})}
								</ul>
						</div>
						<div id='checkout-summary'>
							
							<button id='checkout-btn' className='checkout-btns'>CHECKOUT</button><br />


							<div id='paypal-btn' className='checkout-btns flex justify-center'>

								<div>CHECKOUT WITH</div> 
								<div>
									<img id='paypal' className='inline' src={paypal} />
								</div>

							</div>

							<div id='promo-div'>
								<div id='promo-code'>
									<h4>PROMO CODE</h4>
									<input type='text' placeholder='Promo Code' />
									<input type='submit' value='Apply' />
								</div>

								<div className='bg-light-grey'>
									<div className='flex border-bottom padding'>
										<div className='half'>Subtotal <br /> Shipping</div>
										<div className='half'>£{this.props.total}<br /> FREE</div>
									</div>
									<div className='flex padding'>
										<div className='half'><h3>TOTAL</h3> <br /> (Including VAT)</div>
										<div className='half'><h3>£{this.props.total}</h3></div>
									</div>
								</div>
							</div>
						</div>


					</div>
			</div>

			)
	}
}
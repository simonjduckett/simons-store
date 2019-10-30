import React from 'react';


export class Checkout_product extends React.Component {

	render () {

		return (
			<li>
				<div className='flex verticalpadding'>
					<div className='third'>
						<img src={this.props.product.image} />
					</div>

					<div className='third'>{this.props.product.title}
					<div><h4 className='inline'>Color: </h4>{this.props.product.color}</div>
						<br /><h4 className='inline'>Price: </h4>£{this.props.product.price}
						<div><h4 className='inline'>Subtotal: </h4>£{this.props.product.price * this.props.product.count}</div>

					</div>
					<div className='third'>


						<input
						className='amount' 
						id={this.props.id} 
						type="number" 
						name="quantity" 
						min="1" max="5" 
						defaultValue={this.props.product.count} 
						onInput={() => this.props.changeCount(this.props.product, this.props.id)}
						/>


					<br />
					<button className='remove-btn' onClick={() => this.props.removeFromBag(this.props.product)}>Remove</button>
					</div>





				</div>
				
				
				
			</li>

			)
	}

}
import React from 'react';


export class Product extends React.Component {

	render () {

		return (
			<div className='men center'>
				<div><img className='image-product' src={this.props.product.image}/></div>
				<div className='card-divs title-product'><h4>{this.props.product.title}</h4></div>
				
				<div className='card-divs price'>£{this.props.product.price}.00</div>
				<div className='center'>
					<button className='addBtn' onClick={() => this.props.addToBag(this.props.product)}>Add to bag</button>
				</div>
			</div>

			)
	}

}
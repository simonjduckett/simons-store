import React from 'react';


export class Nav extends React.Component {
	render() {
		return (
			<div className='content'>
				<nav className='small-nav-text'>
					<ul>
						<li>Feedback</li>
						<li>Track Order</li>
						<li>Find A Store</li>
						<li>Help</li>
						<li>Use Of Cookies</li>
						<li>|</li>
						<li className='fa fa-user-circle-o'></li>
						<li>Sign In</li>
					</ul>
				</nav>
			</div>
			)
	}
}
import React from 'react';

export class Footer extends React.Component {
	render() {
		return (
			<footer className='container'>
				<div className='content flex'>
					<div id='footer-table-container'>
						<table>
							<tr>
								<th>Quick Links</th>
								<th>Support</th>
								<th>Company</th>
							</tr>
							<tr>
								<td>Return Policy</td>
								<td>Help</td>
								<td>About Us</td>
							</tr>
							<tr>
								<td>Track Order</td>
								<td>Contact Us</td>
								<td>Careers</td>
							</tr>
							<tr>
								<td>Shipping</td>
								<td>Feedback</td>
								<td>Privacy Policy</td>
							</tr>
							<tr>
								<td>Find a Store</td>
								<td></td>
								<td>Terms of use</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td>Terms and Conditions of purchase</td>
							</tr>
							<tr>
								<td></td>
								<td></td>
								<td>Sustainablility</td>
							</tr>
						</table>
					</div>
					<div id='sign-up-div'>
						<h4>It's all about the percs</h4>
						<h2>KEEP IN TOUCH WITH SIMON'S</h2>
						<form>
							<input type='email' placeholder='Please enter a valid Email'></input>
							<input className='pointer' type='submit' value='>'></input>
							<p>By submitting my email address, I agree to receive personalised emails from S&Co. 
							Group of companies regarding exclusive offers, new arrivals, event and contest invites and more as explained in S&Co. 
							Privacy Policy.* I may unsubscribe at any time.</p>
							<div className='flex'>
								<div id='checkbox'><input type='checkbox'></input></div>
								<div>I allow S&Co. Group of companies to match data from third parties with my email address to personalize its offer.*</div>
							</div>
						</form>
					</div>
					
				</div>

					<div className='content verticalpadding'>
						<div id='social-icons'>
							<div className='fa fa-tumblr'></div>
							<div className='fa fa-twitter'></div>
							<div className='fa fa-youtube'></div>
							<div className='fa fa-facebook'></div>
							<div className='fa fa-instagram'></div>
						</div>
					</div>
			</footer>
			)
	}
}
								
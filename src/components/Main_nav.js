import React from 'react';
import {Link} from 'react-router-dom';



export class Main_nav extends React.Component {




	render() {
		return (
			    <div id='nav-main' className='content flex'>
                      <div>
                        <nav className='main-nav'>
                          <div id='logo'>SIMON'S</div>
                          <ul>
                            <Link to={'/'}><li>NEW</li></Link>
                            <Link to={'/sale'}><li><span className='color-red'>SALE</span></li></Link>
                            <Link to={'/men'}><li>MEN</li></Link>
                            <Link to={'/women'}><li>WOMEN</li></Link>
                            <Link to={'/kids'}><li>KIDS</li></Link>
                          </ul>
                        </nav>
                      </div>
                      <div className='search-div'>
                      <form onSubmit={this.props.search}>
                        <input id='search-box' type='text' placeholder='search'></input>
                        </form>
                      
    
                      </div>
                      <Link to={'/checkout'}><div className='fa fa-shopping-bag shopping-bag'><div id='bag-count'>{this.props.totalCount}</div></div></Link>
                  </div>

			)
	}
}
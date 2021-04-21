import React,{Component} from 'react'
import {Link,NavLink} from "react-router-dom";
import logo from "./logo.svg";
import styled from "styled-components";
import {ButtonContainer} from "./Button";
import {connect} from 'react-redux';
 class Navbar extends Component{

	
	render(){
	console.log(this.props);
		const {post} = this.props;
	return(
<NavWrapper className="navbar navbar-expand-sm bg-secondary
navbar-dark px-sm-5">
{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<Link to="/Contact">
<img src={logo} alt="store" 
className="navbar-brand" />
</Link>
{/* link to products label*/}

<ul className= "navbar-nav align-items-right">
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
products
</Link>
 
 





</li>
</ul>
{/*link to cart*/}

<Link to="/cart" className="ml-auto">

<span className='ml-10'>
<i className="fas fa-cart-plus fa-3x" id="cart" />
</span>
<h3 className='number'><strong>{this.props.post1}</strong></h3>

</Link>





</NavWrapper>
			);
	}
}

const mapStateToProps =(state) => {
  
	return {
	post1 : state.cart.counter,

	
	
	
	   
	  
	  }
  
  }





export default connect(mapStateToProps)(Navbar);

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
	color:var(--mainWhite) !important;
	font-size: 1.3rem;
	text-transform:capitalize;
}
`;


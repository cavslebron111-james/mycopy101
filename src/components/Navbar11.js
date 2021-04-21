import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';
import logo from "../logo.svg";
import styled from "styled-components";

const Navbar = () => {
    
    return (

// <nav className ="nav-wrapper blue darken-8000">
//         <div className="container">
// <a className ='brand-logo'>Poke times</a>
// <ul className ='right'>
// <li><Link to = "/">Home</Link></li>
// <li><NavLink to = "/About">About</NavLink></li>
// <li><NavLink to = "/Contact">Contact</NavLink></li>
// <li><NavLink to = "/Mycart">Mycart <i className="fas fa-cart-plus" ></i></NavLink> / >  </li>
// </ul>
// </div>
// </nav>

//     )
// }

<NavWrapper className="navbar navbar-expand-sm bg-primary
navbar-dark px-sm-5">
{/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}
<Link to="/">
<img src={logo} alt="store" 
className="navbar-brand" />
</Link>
{/* link to products label*/}

<ul className= "navbar-nav align-items-right">
<li className="nav-item ml-5">
<Link to="/" className="nav-link">
products
</Link>
 <li><Link to = "/">Home</Link></li>
 <li><NavLink to = "/About">About</NavLink></li>
 <li><NavLink to = "/Contact">Contact</NavLink></li>
 <li><NavLink to = "/Mycart">Mycart <i className="fas fa-cart-plus" ></i></NavLink>   </li>






</li>
</ul>
</NavWrapper>
			);
	
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
	color:var(--mainWhite) !important;
	font-size: 1.3rem;
	text-transform:capitalize;
}


`;






















export default withRouter(Navbar)
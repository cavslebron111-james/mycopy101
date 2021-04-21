import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


//import PropTypes from "prop-types";
import { addToCart,handleDetailed } from '../action/postAction';

class sampleHome extends Component {
//   componentDidMount(){
//     this.setProduct();
//  }
 
 
  handleClick = (id)=>{
    this.props.addToCart(id); 
}

handleDetail = (id)=>{
  this.props.handleDetailed(id); 
}

// setProduct = () =>{
//   this.props.setProduct()
// }
  // handleModal = (id) =>{
  //  this.props.openModal(id)
 //  }

render(){
      
      console.log(this.props);
      
        const{posts1} = this.props;
        
        const postList = posts1.map(post =>{
               return (
      
      <ProductWrapper className = "col-9 mx-auto col-md-6 col-lg-3 my-3" key={post.id}>
       
      <div className="card">
       <div className="img-container p-5" onClick={() =>{
        this.handleDetail(post.id)
        }}>
       
        <Link to=  {'/' + post.id}>
       <img src = {post.img} alt ="cellphone" className = "card-img-top"/>
       </Link>
       
        
       
       
       <Link to ="/"><button 
       className="cart-btn"
        disabled = {post.inCart ? true : false}
         onClick  ={() => {       
          this.handleClick(post.id);
         // this.handleModal(post.id);
          }}>
      {post.inCart ? (
        <p className="text-capitalize mb-0" disabled>
         {' '}
         inCart        
         </p> 
       )  :  (
           <i className="fas fa-cart-plus" />
       )}
           </button></Link>
       
          {/* 
       <button className="cart-btn"  onClick = {()=>{this.handleClick(post.id)}}>
              <i className="fas fa-cart-plus" />
            </button>
                
          */  } 
            
    </div> 
      <div className="card-footer d-flex justify-content-between">
      <p className= "align-self-center mb-0">{post.title}</p>
      <h5 className = " font-italic mb-0">
      <span className = 'mr-1'>$</span>{post.price}
      
      </h5>
      </div>
    
    </div>
    
    
    </ProductWrapper> 
    
               )            
})
        
  


return (
  
  
  
<div className="container">
<h4 className = 'text-capitalize text-center '>this is my cellphone</h4> 





<div className = 'row'>
{postList}
</div>
</div>


)
    }
  }
 //how to add to cart using dispatch
 const mapDispatchToProps = (dispatch) => {
  
  return {
    addToCart : (id) => {dispatch(addToCart(id))},
    handleDetailed: (id) => {dispatch(handleDetailed(id))}
    //openModal: (id) => {dispatch(openModal(id))}
   
    // setProduct:() => {dispatch(setProduct())}
   }
}




//how to mapStateToProps - taking the state of the store and grabbing the posts property of the store
const mapStateToProps =(state,ownProps) => {
  
  return {
  posts1 : state.cart.posts,
  Authenticated: state.auth.isAuthenticated
  //copy1: state.productscopy
  
  
  
     
    
    }

}
// sampleHome.propTypes = {
// 	post:PropTypes.shape({
// 		id:PropTypes.number,
// 		img:PropTypes.string,
// 		title:PropTypes.string,
// 		price:PropTypes.number,
// 		inCart:PropTypes.bool
// 	}).isRequired
// };



export default connect(mapStateToProps,mapDispatchToProps)(sampleHome)

const ProductWrapper = styled.div`
.card{
border-color:orange;
transition:all 1s linear;
}

.card-footer{
background: transparent;
border-top: transparent;
transition: all 1s linear;
}

&:hover{
.card{
  border:0.04rem solid rgba(0,0,0,0.2);
  box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
}
.card-footer{
background:rgba(247,247,247);
}

}

.img-container {
position: relative;
overflow: hidden;


}
.card-img-top{
transition: all 1s linear;
}


.img-container:hover .card-img-top{
transform: scale(1,1.2);
}
.cart-btn{
position:absolute;
bottom:0;
right:0;
padding: 0.2rem 0.4rem;
background:lightblue;
border:none;
color:white;
font-size:1.4rem;
border-radius:0.5rem 0 0 0;
transform:translate(100%,100%);
transition: all 1s linear;
}

.img-container:hover .cart-btn {
transform:translate(0,0);

}
.cart-btn:hover{
color:blue;
cursor:pointer;
}







`;
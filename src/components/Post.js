import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import {ButtonContainer} from './Button';
import {connect} from 'react-redux';
import { addToCart,handleDetailed,closeModal } from '../action/postAction';

 class Post extends Component{

render(){
  
  console.log(this.props);
  
    
const post1 = this.props.post1 ? (
  
  
<div className="container py-5">
        <div className="row">
           <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
           <h1>{this.props.post1.title}</h1>
           </div>
        </div>
<div className="row">
    <div className="col-10 mx-auto col-md-6 my-3">
    <img src={this.props.post1.img} className="img-fluid" alt="product" />
    </div>
      <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
      <h1> model: {this.props.post1.title} </h1>
      <h2 className="text-title text-uppercase text-muted mt-3 mb-2">
      made by : <span className="text-uppercase"> {this.props.post1.company}</span></h2>
      <h1 className="text-capitalize font-weight-bold mt-3 mb-0">
      Our Price is : <span className="text-uppercase"> {this.props.post1.price}$ </span></h1>
      <p className="text-capitalize font-weight-bold mt-3 mb-0"> some info about product </p>
      <p className="text-muted-lead"> {this.props.post1.info}</p>
 <div>
	 <Link to="/">
	 <ButtonContainer className="text-capitalize font-weight-bold">
		 back to products
	 </ButtonContainer>
	 <ButtonContainer cart className="text-capitalize font-weight-bold"
		 disabled={this.props.post1.inCart?true:false}
		onClick={()=>{
			this.props.addToCart(this.props.post1.id);
			this.props.closeModal();
		}
		}
		>
		 {this.props.post1.inCart ? "inCart" : "add to Cart"}
	 </ButtonContainer>
	 
	 </Link>
 </div>
 
 
 
 </div>
</div>






</div>
  ) : (
    null
  )
return (
  <div className='container'> {post1}</div>
)
  


}
}
const mapStateToProps =(state,ownProps) => {
  
  let id = ownProps.match.params.Post_id;
   
    return {
      
      post1: state.cart.posts.find(post1 => 
        post1.id === id
   
      )
    }
}



const mapDispatchToProps = (dispatch) => {
  
  return {
    addToCart : (id) => {dispatch(addToCart(id))},
    handleDetail:(id)=> {dispatch(handleDetailed(id))},
    closeModal: () => {dispatch(closeModal())}

   }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);
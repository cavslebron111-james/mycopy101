import React, {Component} from 'react';
import {connect} from 'react-redux'
//import {deletePost} from '../action/postAction'
import styled from 'styled-components';
import {ButtonContainer} from './Button'

class Post extends Component {
//handleClick = () => {
  //  this.props.deletePost(this.props.post1.id);
  //  this.props.history.push('/');

  backtoProduct = () => {
     // this.props.deletePost(this.props.post1.id);
      this.props.history.push('/');
  
  }  
    render() {
     console.log(this.props.post1);
     const post = this.props.post1 
       return( 
    
    <PostWrapper>
    <div className = 'py-5'>
    <div className='row'>
    <div className ="col-10 mx-auto col-md-6 my-3 ">
    <h2 className='text-center'>{this.props.post1.title}</h2>
    </div>
    </div>
    
    <div className="row">
    <div className ="col-12 mx-auto col-md-6 mt-2 mb-3 ml-0 ">
    <div className="img-container ml-0">
    <img src = {this.props.post1.img}className="image-fluid" alt ="cellphone" />
    </div>
    </div>
    <div className ="col-10 mx-auto col-md-6 mt-2 text-center text-capitize">
    <h2 >Model:{this.props.post1.title}</h2>
    <h3 className=" text-capitalize text-bright my-2 "><strong>made by:</strong> {this.props.post1.company}</h3>
    <h6 className="text-capitalize text-blue my-2 font-weight-bold"><strong>Description:</strong> {this.props.post1.info}</h6>
    <h4 className="text-capitalize text-yellow my-2">net price: {this.props.post1.price}$</h4>
    
    
    
   
    <ButtonContainer className='text-capitalize mb-2 mr-5' onClick={this.backtoProduct}> back to products</ButtonContainer>
    <ButtonContainer cart  > add to cart</ButtonContainer>
    
    
    
    </div>
    </div>
    </div>
    
    
    
    
    
    
    </PostWrapper>
    
    
    
    
    
    

       

   
   
       
   
        

      
        
        

    )
        
}

}

//delete individual post from store
//const mapDispatchToProps = (dispatch) => {
   // return {
   //deletePost : (id) => {dispatch(deletePost(id))}

    //}


 // }







const mapStateToProps = (state, ownProps) => {
   let id = ownProps.match.params.Post_id;
   
    return {
   post1:state.posts.find((post1) => {
       return post1.id === id
    
   })
    }
}




export default connect(mapStateToProps)(Post)



const PostWrapper = styled.div`
.img-container:hover .card-img-top{
	transform: scale(1,1.2);

}

.row {
  color: blue;
}
.text-yellow{
  color:var(--mainYellow);
}


`;
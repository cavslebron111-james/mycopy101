import React, {Component} from 'react';
import styled from 'styled-components';

import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {closeModal} from '../action/postAction';



class Modal extends Component {
  componentDidMount(){
    let id = ownProps.match.params.Post_id;
    
  }
  
  
  
  
  
  
  
  
  close = () =>{
       this.props.closeModal()
   }
   
   
    render() {
       console.log(this.props)
        const {post1,modal} = this.props;

 
     
     if(!this.props.modal) {
         return null;
     } else {
         return (
            <ModalContainer>
            <div className = 'container'>
             <div className = 'row'>
             <div id="modal" className= 'col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'>
             <h5>Item Added to the Cart</h5>
             <img src = {this.props.post1.img} className="img-fluid" alt = "phone-img" />
             <h5>{this.props.post1.title}</h5>
             <h5 className = 'text-muted'>price : ${this.props.post1.price}</h5>
             <Link to = '/'>
             <ButtonContainer onClick ={this.close()}>
             goto store
             </ButtonContainer>
             </Link>
             <Link to = '/Cart'>
             <ButtonContainer cart onClick ={this.close()}>
              GoTo Cart
             </ButtonContainer>
             </Link>
             
             </div>
             </div>
             </div>
         </ModalContainer>
          );
         }
 
        
 
    }
}

const mapStateToProps =(state,ownProps) => {
  
    let id = ownProps.match.params.Post_id;
     
      return {
        modal:state.modalOpen,
        post1:state.posts
      }
  }

  const mapDispatchToProps = (dispatch) => {
  
    return {
      
      closeModal: () => {dispatch(closeModal())}
  
     }
  }
  




export default connect(mapStateToProps,mapDispatchToProps)(Modal)


const ModalContainer = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;
background: rgba(0,0,0,0.3);
display: flex;
align-items: center;
display-content: center;
#modal {
    background:var(--mainWhite);
}
`;

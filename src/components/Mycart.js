import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../action/postAction';
import Recipe from '../components/Recipe'
import CartColumns from '../components/Cart/CartColumns';


class Mycart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
   handleClearCart = () => {
    this.props.history.push('/');
   }
    render(){
        console.log(this.props);
        console.log(this.props.addQuantity);
         console.log(this.props.items)  
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
         <div className="row my-2 text-capitalize text-center" key={item.id}>
        <div className="col-10 mx-auto col-lg-2">
        <img 
        src={item.img}
        style={{ width: "5rem", height: "5rem" }} 
        className="img-fluid"
        alt="product" 
        />
        </div>
        
        <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product : </span>{item.title}
        </div>
     
        <div className="col-10 mx-auto col-lg-2">
        <span className = "d-lg-none">Price : </span>{item.price}
        </div>
 
        <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
        
        
        <div>
        <Link to="/Mycart"><span className="btn btn-black mx-1" onClick ={()=>this.handleSubtractQuantity(item.id)}><i style={{ color: "blue", fontsize: "1rem" }} className="fas fa-minus-circle"  /></span></Link>
        <span className="btn btn-black mx-1">{item.quantity}</span>
        <Link to="/Mycart"><span className="btn btn-black mx-1" onClick ={()=>this.handleAddQuantity(item.id)}><i style={{ color: "blue", fontsize: "1rem" }}className="fas fa-plus-circle"  /></span></Link>
        </div>
        </div>
        </div>
        
        <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick ={()=>this.handleRemove(item.id)} >
        <i className="fas fa-trash" style={{ color: "#74992e" }} />
        </div>
        </div>
        
        <div className="col-10 mx-auto col-lg-2">
        <strong> Item Total: $ {item.total}</strong>
        </div>
        </div>
        
        
                         
                    )
                })
            ):
(
             

    <div className = 'container mt-5'>
    <div className = 'row'>
    <div className = 'col-10 mx-auto text-center text-title'>
    <h1> your cart is currently empty</h1>
    
    </div>
    </div>
    </div>
)        
       return(
            <div className="container">
                <div className="cart">
                    <CartColumns />
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />          
            </div>
       )
    }
}


const mapStateToProps = (state) =>{
    return{
        items: state.cart.addedItems
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Mycart)
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING,SUB_SHIPPING,
HANDLE_DETAIL,CLOSE_MODAL,OPEN_MODAL } from '../../action/action-types/actions';



export const initState = { posts: [
    {
      id: '1',
      title: "Google Pfixel - Black",
      img: "img/product-1.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '2',
      title: "Samsung S7",
      img: "img/product-2.png",
      price: 16,
      company: "SAMSUNG",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '3',
      title: "HTC 10 - Black",
      img: "img/product-3.png",
      price: 8,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '4',
      title: "HTC 10 - White",
      img: "img/product-4.png",
      price: 18,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '5',
      title: "HTC Desire 626s",
      img: "img/product-5.png",
      price: 24,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '6',
      title: "Vintage Iphone",
      img: "img/product-6.png",
      price: 17,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '7',
      title: "Iphone 7",
      img: "img/product-7.png",
      price: 30,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '8',
      title: "Smashed Iphone",
      img: "img/product-8.png",
      price: 2,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
  
  
  
  
  {
      id: '9',
      title: "Google Pixel - Black",
      img: "img/product-9.png",
      price: 10,
      company: "GOOGLE",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '10',
      title: "Samsung S7",
      img: "img/product-10.png",
      price: 16,
      company: "SAMSUNG",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '11',
      title: "HTC 10 - Black",
      img: "img/product-11.png",
      price: 8,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '12',
      title: "HTC 10 - White",
      img: "img/product-12.png",
      price: 18,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '13',
      title: "HTC Desire 626s",
      img: "img/product-13.png",
      price: 24,
      company: "htc",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '14',
      title: "Vintage Iphone",
      img: "img/product-14.png",
      price: 17,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '15',
      title: "Iphone 7",
      img: "img/product-15.png",
      price: 30,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: '16',
      title: "Smashed Iphone",
      img: "img/product-16.png",
      price: 2,
      company: "apple",
      info:
        "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
      inCart: false,
      count: 0,
      total: 0
    }
  ],
  
   
    products:[],
    productscopy:[],
		detailProduct: [],
		addedItems:[],
		modalOpen:false,
		modalProduct: [],
		cartSubTotal:0,
		cartTax:0,
    cartTotal:0,
    total:0,
    counter:0

}









const rootReducer= (state = initState,action)=>{
   
  //INSIDE HOME COMPONENT
  if(action.type === ADD_TO_CART){
        let addedItem = state.posts.find(item=> item.id === action.id)
        let newProduct = state.posts.find(item=> item.id === action.id)
        newProduct.inCart = true;
        ///check if the action id exists in the addedItems
       let existed_item= state.addedItems.find(item=> action.id === item.id)
       if(existed_item)
       {
          addedItem.quantity += 1 
         addedItem.total = addedItem.quantity * addedItem.price
          // addedItem.price = newProduct.price
         // addedItem.total = addedItem.quantity * newProduct.price
           return{
             ...state,
              
             total: state.total + addedItem.price,
             counter: state.counter + addedItem.quantity 
                }
     }
       else{
        
        addedItem.quantity = 1;
        addedItem.total = addedItem.quantity * addedItem.price
        //calculating the total
          let newTotal = state.total + addedItem.price 
          
          return{
              ...state,
              addedItems: [...state.addedItems, addedItem],
              total : newTotal,
              posts:state.posts,newProduct,
              counter: state.counter + addedItem.quantity 
              
          }
          
      }
  }
  
  if(action.type === HANDLE_DETAIL){
    let itemDetail= state.posts.find(item=> action.id === item.id)
    
    return{
        ...state,
        detailProduct:[state.detailProduct,itemDetail]
        
        
    }
}
  
// if(action.type === SET_PRODUCT){
//   let tempProducts = [];
// 		state.posts.forEach(item =>{
// 			const singleItem = {...item};
// 			tempProducts = [...tempProducts,singleItem];
// 		})
	
// 	return {
//     ...state,
//     products:tempProducts,
//     productscopy:state.products
// }
// }

//  if(action.type === CLOSE_MODAL){
//   return{
//       ...state,
//        modalOpen:false
      
//   }
//  }
  
//  if(action.type === OPEN_MODAL){
//   return{
//       ...state,
//        modalOpen:true
      
//   }
//  }
 
 
 
 
 
 
 
 
 if(action.type === REMOVE_ITEM){
      let itemToRemove= state.addedItems.find(item=> action.id === item.id)
      let new_items = state.addedItems.filter(item=> action.id !== item.id)
      let newProduct = state.posts.find(item=> item.id === action.id)
        newProduct.inCart = false;
      //calculating the total
      let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
      console.log(itemToRemove)
      return{
          ...state,
          addedItems: new_items,
          total: newTotal,
          posts:state.posts,newProduct,
          counter: state.counter - itemToRemove.quantity 
      }
  }
   //INSIDE CART COMPONENT
   if(action.type=== ADD_QUANTITY){
    let addedItem = state.posts.find(item=> item.id === action.id)
      addedItem.quantity += 1 
      addedItem.total = addedItem.quantity * addedItem.price
      let newTotal = state.total + addedItem.price
      let newQuantity = state.counter + 1
      return{
          ...state,
          total: newTotal,
          counter: newQuantity
      }
}
if(action.type=== SUB_QUANTITY){  
    let addedItem = state.posts.find(item=> item.id === action.id) 
    //if the qt == 0 then it should be removed
    if(addedItem.quantity === 1){
        let new_items = state.addedItems.filter(item=>item.id !== action.id)
        let newTotal = state.total - addedItem.price
        let newProduct = state.posts.find(item=> item.id === action.id)
        newProduct.inCart = false;
        return{
            ...state,
            addedItems: new_items,
            total: newTotal,
            posts:state.posts,newProduct,
            counter: state.counter - addedItem.quantity 
        }
    }
    else {
        addedItem.quantity -= 1
        
        addedItem.total  = addedItem.total - addedItem.price
        let newTotal = state.total - addedItem.price
        let newQuantity = state.counter - 1
        
        return{
            ...state,
            total: newTotal,
            counter: newQuantity 
        }
    }
    
}

if(action.type=== ADD_SHIPPING){
      return{
          ...state,
          total: state.total + 6
      }
}

if(action.type=== SUB_SHIPPING){
    return{
        ...state,
        total: state.total - 6
    }
}

else{
return state
}

}

export default rootReducer
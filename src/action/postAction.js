
export const addToCart = (id)=>{
    return{
        type: 'ADD_TO_CART',
         id:id
        }
    }


//remove item action
export const removeItem=(id)=>{
    return{
        type: 'REMOVE_ITEM',
        id:id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: 'SUB_QUANTITY',
        id:id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: 'ADD_QUANTITY',
        id:id
    }
}

export const handleDetailed=(id)=>{
    return{
        type: 'HANDLE_DETAIL',
        id:id
    }
}

export const closeModal=()=>{
    return{
        type: 'CLOSE_MODAL'
        
    }
}

export const setProduct=()=>{
    return{
        type: 'SET_PRODUCT'
        
    }
}

export const openModal=(id)=>{
    return{
        type: 'OPEN_MODAL',
        id:id
        
    }
}
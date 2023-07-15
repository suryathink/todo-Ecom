let initialData ={
    users:[],
    cartData:[]
}

const myReducer = (state = initialData,action) => {
   console.log("action",action)
    if (action.type==="ADD"){
        return (state = {
            ...state,
            users:action.payload,
        })
    } else if (action.type ==="CART"){
        return  {
             ...state,
            cartData:[...state.cartData, action.payload]
        }
    }else if (action.type === "REMOVE"){
        return {
            ...state,
            cartData:[state.cartData.filter(product => product.id !== action.payload)]
        }
    }
   else{

       return state
   }
};

export default myReducer;

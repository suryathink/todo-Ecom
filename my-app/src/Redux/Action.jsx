import myStore from "./Store";
export const myAction = (data) => {

  myStore.dispatch({
    type: "ADD",
    payload:data,
  });

};


export const addCart = (data)=>{
  myStore.dispatch({
    type: "CART",
    payload:data,
  });
}

export const RemoveFromCart = (data)=>{
  myStore.dispatch({
    type: "REMOVE",
    payload:data,
  });
}
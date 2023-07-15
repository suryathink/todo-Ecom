
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch,useSelector } from "react-redux";

const Cart = () => {
  const [total,setTotal]= useState(0);

  const allProducts = useSelector((state) => state.users);
  const dispatch = useDispatch();


  let cartDataIDArray = JSON.parse(localStorage.getItem("cartIdArray"));

  const cartProducts = allProducts.filter((product)=>{
    return cartDataIDArray?.includes(product.id)
  })

  console.log("cartProducts",cartProducts)

  let sum=0;
  for (let i=0;i<cartProducts.length;i++){
    sum+=cartProducts[i].price;
  }
 
  
  const getData = async () => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products`);
      data = await data.json();
      dispatch({
        type: "ADD",
        payload:data
      })

    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = (id) =>{
    cartDataIDArray = JSON.parse(localStorage.getItem("cartIdArray"));
    cartDataIDArray.splice(id,1);
    // console.log("after removing",cartDataIDArray)
    localStorage.setItem("cartIdArray", JSON.stringify(cartDataIDArray))
    getData()
  }

  useEffect(()=>{
    if (allProducts.length==0){
      getData()
    }
  },[])

  return cartProducts.length !== 0 ? (
    <div>
     <h2>Total Price : {sum}</h2>
      <div
        style={{
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "25px",
        }}
      >
        {cartProducts.map((product, id) => {         
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" style={{ height: "200px" }} src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>Price INR {product.price}</Card.Text>
                <Card.Text>Rating {product.rating.rate}</Card.Text>
                <Button variant="primary" onClick={()=>{removeItem(id)}}>Remove Item From Cart</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  ) : (
    <div>Add Items to Cart By Visiting the Products Page</div>
  );
};

export default Cart;

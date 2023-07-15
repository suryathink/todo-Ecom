import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";import {useSelector } from "react-redux";

const Cart = () => {
    const allProducts = useSelector(state => state.users);
    console.log("allProducts", allProducts)

    let cartData = JSON.parse(localStorage.getItem("cartIdArray")) ||  []
     
    if (cartData.length==0 ){
        alert("Add Items to Cart by Visiting to Product Page")
    }
    return (
    <div>
<div style={{width:"90%",margin:"auto",marginTop:"20px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"25px"}}>
      {cartData.map((product,id) => {
       return <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" style={{height:"200px"}} src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            {/* <Card.Text>{product.description}</Card.Text> */}
            <Card.Text>Price INR {product.price}</Card.Text>
            <Card.Text>Rating {product.rating.rate}</Card.Text>
            <Button variant="primary" onClick={()=>addToCart(id)}>Add to Cart</Button>
          </Card.Body>
        </Card>;
      })}
    </div>
      
    </div>
  )
}

export default Cart
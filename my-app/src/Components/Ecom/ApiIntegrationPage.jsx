import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch,useSelector } from "react-redux";

const ApiIntegrationPage = () => {
    const dispatch = useDispatch();
    const result = useSelector(state => state.users);
    console.log("result", result)


  const getData = async () => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products`);
      data = await data.json();
    //   console.log(data);
    //   setProducts(data);
      dispatch({
        type: "ADD",
        payload:data
      })

    } catch (error) {
      console.log(error);
    }
  };
  
  const addToCart = (id)=>{
      let cart = JSON.parse(localStorage.getItem("cartIdArray")) ||  []
      if (cart.includes(id)){
        alert("Item already in Cart")
    } else{
        cart.push(id);
        localStorage.setItem("cartIdArray", JSON.stringify(cart))
        alert("Item Added to Cart")
    }
  
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{width:"90%",margin:"auto",marginTop:"20px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"25px"}}>
      {result.map((product,id) => {
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
  );
};

export default ApiIntegrationPage;

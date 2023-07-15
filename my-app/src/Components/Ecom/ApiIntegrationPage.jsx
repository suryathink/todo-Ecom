import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch,useSelector } from "react-redux";
import { addCart } from "../../Redux/Action";
import Toast from "./Toastify";

const ApiIntegrationPage = () => {
    const [toastAlert,setToastAlert] = useState(false)
    const [message,setMessage] = useState("")

    const dispatch = useDispatch();
    const result = useSelector(state => state.users);

    const cartProducts = useSelector((state) => state.cartData);
     


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
  
  const addToCart = (product)=>{
    if (cartProducts.includes(product)){
        setMessage("Product already Present in Cart")    

    }else{
        addCart(product)   
        setMessage("Product Added to cart")    
    }
    
    setToastAlert(true)
    setTimeout(()=>{
     setToastAlert(false)
     setMessage("")
    },5000)

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{position:"relative",width:"90%",margin:"auto",marginTop:"20px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"25px"}}>
    {toastAlert && <Toast message={message}/>}
      {result?.map((product,id) => {
       return <Card key={id} style={{ width: "18rem" }}>
          <Card.Img variant="top" style={{height:"200px"}} src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Price INR {product.price}</Card.Text>
            <Card.Text>Rating {product.rating.rate}</Card.Text>
            <Button variant="primary" onClick={ 
                ()=>addToCart(product)         
                }>Add to Cart</Button>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
};

export default ApiIntegrationPage;

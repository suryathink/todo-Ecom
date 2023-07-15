
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch,useSelector } from "react-redux";
import { RemoveFromCart } from "../../Redux/Action";



const Cart = () => {


  const dispatch = useDispatch()
  const cartProducts = useSelector((state) => state?.cartData);
  console.log("cartProducts",cartProducts)

  const removecart = (id) =>{
    dispatch({
      type: "REMOVE",
      payload:id,
    });
  }
  
  return cartProducts?.length !== 0 ? (
    <div>
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
        {cartProducts?.map((product, id) => {         
          return (
            <Card key={id} style={{ width: "18rem"}}>
              <Card.Img variant="top" style={{ height: "200px" }} src={product?.image} />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>Price INR {product?.price}</Card.Text>
                <Card.Text>Rating {product?.rating?.rate}</Card.Text>
                {/* <Button variant="primary" onClick={()=>
                removecart(product.id)
                }>Remove Item From Cart</Button> */}
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

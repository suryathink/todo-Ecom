import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ApiIntegrationPage = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    try {
      let data = await fetch(`https://fakestoreapi.com/products`);
      data = await data.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{width:"90%",margin:"auto",marginTop:"20px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"25px"}}>
      {products.map((product) => {
       return <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" style={{height:"200px"}} src={product.image} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            {/* <Card.Text>{product.description}</Card.Text> */}
            <Card.Text>Price INR {product.price}</Card.Text>
            <Card.Text>Rating {product.rating.rate}</Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>;
      })}
    </div>
  );
};

export default ApiIntegrationPage;

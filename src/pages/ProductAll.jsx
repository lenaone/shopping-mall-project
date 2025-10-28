import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../utils/api';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const fetchProducts = async () => {
    const data = await getProducts();
    setProductList(data);
  };
  
  useEffect(()=>{
    fetchProducts();
  },[])

return (
  <div>
    <Container>
      <Row>
       {productList.map((menu) => (
         <Col lg={3}>
           <ProductCard item={menu} />
         </Col>
       ))}
      </Row>
    </Container>
  </div>
  )
}

export default ProductAll
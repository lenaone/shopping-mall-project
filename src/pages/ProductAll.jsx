import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard.jsx'
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../utils/api';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const fetchProducts = async () => {
    const searchQuery = query.get('q') || '';
    const data = await getProducts(searchQuery);
    setProductList(data);
  };
  
  useEffect(()=>{
    fetchProducts();
  },[query])

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
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { getProductById } from '../utils/api';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getProductDetails = async () => {
    let url = `https://my-json-server.typicode.com/lenaone/shopping-mall-project/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data || {});
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <Container className="product-image">
      <Row>
        <Col md={6}>
          <img
            className="product-details-image"
            src={product.img}
            alt={product.title || 'Product'}
          />
        </Col>
        <Col md={6}>
          <div>{product.title}</div>
          {product?.new === true && (
            <div className="new-product-base new-product-details">신제품</div>
          )}
          <div>₩{product.price}</div>
          {product?.choice === true && (
            <div className="choice">conscious choice</div>
          )}
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="dropdown-toggle btn btn-outline-dark"
            >
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product.size &&
                product.size.map((sizeOption) => (
                  <Dropdown.Item
                    key={`size-${sizeOption}`}
                    href={`#/size-${sizeOption}`}
                  >
                    {sizeOption}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <button type="button" className="add-button btn btn-dark">
            추가
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;

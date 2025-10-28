import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/product/${item.id}`);
  }

  return (
    <div className='card'>
      <img className="card-image" src={item?.img} onClick={handleShowDetails} />
      <div className='choice'>{item?.choice === true ? 'conscious choice' : ''}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className='new-product-base new-product'>{ item?.new === true ? '신제품' : '' }</div>
    </div>
  )
}

export default ProductCard
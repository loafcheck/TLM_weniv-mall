import React from 'react'
import styled from 'styled-components';

import getImgSrc from '../utils/getImgSrc';
import LikeButton from './LikeButton'
import ProductImg from './ProductImg'
import ProductTitle from './ProductTitle'

const Item = styled.li`
  width: 380px;
  height: 462px;

  .title-btn-wrapper {
    margin-top: 20px;
    
    display: flex;
    justify-content: space-between;
  }
`

export default function ProductItem({ data }) {
  return (
    <Item>
      <a href="#">
        <ProductImg
          src={getImgSrc(data.thumbnailImg)}
          alt={data.productName + " 이미지"}
          isSoldout={data.stockCount === 0 ? true : false}
        />
        <span className='title-btn-wrapper'>
          <ProductTitle productName={data.productName} price={data.price} discountRate={data.discountRate} />
          <LikeButton />
        </span>
      </a>
    </Item>
  )
}

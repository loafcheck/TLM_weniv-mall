import React from 'react'
import styled from 'styled-components';
import Price from './common/Price';

const Title = styled.strong`
  display: block;

  width: 360px;

  font-size: 18px;
  line-height: 22px;
  color: ${({ theme }) => theme.lightBlack};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const OriginalPrice = styled(Price)`
  display: inline-block;

  margin-top: 10px;
  margin-right: 10px;
`

export default function ProductTitle({ productName, price, discountRate }) {

  return (
    <span>
      <Title>{productName}</Title>
      <OriginalPrice price={price} discountRate={discountRate} />
      {!!discountRate &&
        <Price price={price} isDiscount={true} discountRate={discountRate} />
      }
    </span>
  )
}

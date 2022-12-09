import React from 'react'
import styled from 'styled-components';
import AsideLink from '../../components/AsideLink';
import ProductList from '../../components/ProductList'
import CartImg from "../../asset/img/icon-shopping-cart-white.svg";

const CartLink = () => <AsideLink to={'/cart'} imgUrl={CartImg} />

const Wrapper = styled.div`
  position: relative;
  margin: 160px auto;

  width: fit-content;
`

export default function HomePage() {
  return (
    <Wrapper>
      <CartLink />
      <ProductList />
    </Wrapper>
  )
}

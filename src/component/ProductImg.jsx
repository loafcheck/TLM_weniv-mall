import React from 'react'
import styled, { css } from "styled-components";

const cssSoldout = css`
  position: relative;

  ::before {
    content: "";
    position: absolute;

    display: block;

    background: ${({ theme }) => theme.filterColor};

    width: 100%;
    height: 100%;
  }

  ::after {
    content: "soldout";
    text-transform: uppercase;

    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center;
    line-height: 40px; */

    position: absolute;

    color: #F2F2F2;

    width: 300px;
    height: 40px;

    bottom: 30px;
    left: 40px;

    background-color: ${({ theme }) => theme.lightBlack};

    border-radius: 5px;
  }
`

const Wrapper = styled.span`
  /* pointer-events: none; */
  /* cursor: default; */

  display: inline-block;

  vertical-align: top;

  width: 380px;
  height: 380px;

  border: 1px solid #BDBDBD;
  border-radius: 10px;

  overflow: hidden;

  .product-img {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  ${({ isSoldout }) => isSoldout && cssSoldout}
`

export default function ProductImg({ src, alt, isSoldout }) {

  return (
    <Wrapper isSoldout={isSoldout}>
      <img className='product-img' src={src} alt={alt} />
    </Wrapper>
  )
}

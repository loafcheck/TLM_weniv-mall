import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.aside`
  position: absolute;
  left: calc(100% + 60px);
  width: 80px;
  height: 80px;
`

const StyledLink = styled(Link)`
  display: inline-block;

  width: 100%;
  height: 100%;

  background: ${({ theme: { pointColor } }) => pointColor};
  border-radius: 50%;

  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 40px;
`

export default function AsideLink({ to, imgUrl }) {
  return (
    <Wrapper>
      <StyledLink to={to} imgUrl={imgUrl}></StyledLink>
    </Wrapper>
  )
}

import React, { useState } from 'react'
import styled from "styled-components";

import OffHeartImg from "../asset/img/icon-heart.svg"
import OnHeartImg from "../asset/img/icon-heart-on.svg"

const Button = styled.button`
  float: right;

  width: 18px;
  height: 22px;

  .button-icon {
    width: 18px;
    height: 16px;
  }
`

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeButton = (event) => {
    // event.stopPropagation();
    event.preventDefault();

    setIsLiked((prev) => !prev)
  }

  return (
    <Button onClick={handleLikeButton}>
      <img
        className='button-icon'
        src={isLiked ? OnHeartImg : OffHeartImg}
        alt={
          isLiked ? "채워진 하트 아이콘입니다." : "안 채워진 하트 아이콘입니다."
        }
      />
    </Button>
  )
}
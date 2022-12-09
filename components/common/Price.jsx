import styled from "styled-components";
import addComma from "../../utils/addComma";

const StyledDiscount = styled.span`
  position: relative;

  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: line-through;

  color: #828282;

  ::after {
    position: absolute;

    bottom: 0;
    left: calc(100% + 10px);

    content: '${({ discountRate }) => discountRate}%';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #6327FE;
  }
`

const StyledPrice = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: ${({ theme }) => theme.lightBlack};
  
  .unit {
    margin-left: 2px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`

const getDiscontedPrice = (price, discountRate) => price - (price / 100) * discountRate

function Price({ className = "", price, isDiscount = false, discountRate }) {
  if (isDiscount) {
    return <StyledDiscount discountRate={discountRate}>{getDiscontedPrice(price, discountRate)}원</StyledDiscount>
  }

  return (
    <StyledPrice className={className}>
      {addComma(price)}
      <span className="unit">원</span>
    </StyledPrice>
  )
}

export default Price;
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from "styled-components";

import ProductItem from './ProductItem';

const List = styled.ul`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;

  gap: 60px;

  width: fit-content;
`

async function getData() {
  const result = await axios.get('http://35.76.53.28:8080/mall');
  return result.data;
}

export default function ProductList() {
  const [productsData, setProductsData] = useState([]);

  const getDataCallback = () => {
    getData().then(
      (data) => setProductsData(data)
    );
  }

  useEffect(getDataCallback, [])

  if (productsData.length === 0) {
    return <div>로딩중</div>;
  }

  return (
    <List>
      {productsData.map((data) =>
        <ProductItem data={data} />
      )}
    </List>
  )
}
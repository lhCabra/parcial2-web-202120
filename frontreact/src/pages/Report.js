import React, { useState, useEffect } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import {Chart} from '../components/Chart'
import '../styles/pages/_report.scss'
export const Report = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then(response => response.json())
      .then(d => setProducts(d))
  })
  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id='stock'/></h1>
        <Chart data={products}></Chart>
      </div>
    </section>
  );
};

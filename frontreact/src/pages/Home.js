import React, { useEffect, useState } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import {Card} from '../components/Card'
export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/api/products?q="+searchKey)
      .then(response => response.json())
      .then(d => setProducts(d))
  })
  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id='gallery'/></h1>
        <div className='home-card'>
        {products && products.map((element) => (
          <Card
          name={element.name}
            picture={element.picture}
            stock={element.stock}
            price={element.price}
            isActive={element.isActive}
            about={element.about}
            tags={element.tags}
            key={element._id}
          />))}
        </div>
      </div>
    </section>
  );
};

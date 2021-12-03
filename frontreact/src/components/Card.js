import React from 'react';
import '../styles/_card.scss'
/**
 * Using react component based on function
 * @param {*} props
 * @returns
 */
export const Card = (props) => {
  const { name, picture, price, isActive } = props;
  function clase()
  {
    if(isActive==='true')
    {
      console.log('solo card')
      return 'card'
    }
    return 'card inactive'
  }

  return (
    <div className={clase()}>
      <div className='card-header'>
        <p className='card-title'>{name}</p>
        <span className='material-icons card-favorite'>favorite_border</span>
      </div>
      <img className='card-img' src={picture} alt={name} />
      <div className='card-bottom'>
        <p className='price'>$ {price}</p>
      </div>
    </div>
  );
};

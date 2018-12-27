import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (1) </p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order;
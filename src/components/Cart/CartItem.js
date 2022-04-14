import classes from './CartItem.module.css';
import React, { useContext } from 'react'
import Context from '../context/context';
const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(Context);
  const onAdd = () => {
    ctx.addMeal({
      id: props.id,
      name: props.name,
      amount: props.amount,
      price: props.price
    })
  }

  const onRemove = () => {
    ctx.deleteMeal(props.id)
  }


  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove} >−</button>
        <button onClick={onAdd} >+</button>
      </div>
    </li>
  );
};

export default CartItem;

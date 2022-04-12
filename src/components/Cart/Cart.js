import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import Context from '../context/context';
import CartItem from './CartItem';
const Cart = (props) => {

    const ctx = useContext(Context)

    const items = ctx.items.map(item => {
        return <CartItem
            name={item.name}
            amount={item.amount}
            price={item.price} />
    })

    return (
        <Modal onClose={props.hide}>
            {items}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{ctx.totalAmout}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                    onClick={() => {
                        props.hide()
                    }}
                >close</button>
                {ctx.items.length !== 0 && <button className={classes.button} onClick={() => console.log("ordering...")}>order</button>}
            </div>
        </Modal>
    );
};

export default Cart;
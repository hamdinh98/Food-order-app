import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css'
import Context from '../context/context';

const HeaderCartButton = (props) => {
    const ctx = useContext(Context)
    return (
        <button className={classes.button} onClick={() => props.show()}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{ctx.items.length}</span>
        </button>
    );
};

export default HeaderCartButton;
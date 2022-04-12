import React, { Fragment } from 'react';
import ReactMeals from '../assets/meals.jpg'
import classes from '../Header/Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton show={props.show} hide={props.hide} cart={props.cart} />
            </header>
            <div className={classes['main-image']}>
                <img src={ReactMeals} alt="header img" />
            </div>

        </Fragment>
    );
};


export default Header;
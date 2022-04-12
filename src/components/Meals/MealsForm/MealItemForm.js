import React, { useContext } from 'react';
import Input from '../../UI/Input';
import Context from '../../context/context';
import classes from './MealItemForm.module.css';
import { useRef } from 'react';
const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const ctx = useContext(Context)
    const addItem = () => {

        ctx.addMeal({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amountInputRef.current.value
        })
        // console.log("add item from Form");
    }
    return (
        <div className={classes.form}>
            <Input
                ref={amountInputRef}
                label="Amount" input={{
                    id: 'amount__' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    defaultValue: '1'
                }} />
            <button onClick={addItem} >+Add</button>
        </div>
    );
};

export default MealItemForm;
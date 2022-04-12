import { useReducer } from 'react';
import Context from './context';


const defaultCartState = {
    items: [],
    totalAmout: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const updateditems = state.items.concat(action.item);
            const updatedTotalAmount = state.totalAmout + action.item.price * action.item.amount

            return {
                items: updateditems,
                totalAmout: updatedTotalAmount
            }
        default:
            return state
    }

}
export const ContextProvider = (props) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
    const add = (item) => {
        dispatchCartState({
            type: 'ADD',
            item: item
        })

    }
    const Delete = (id) => {

    }




    return (<Context.Provider value={{
        items: cartState.items,
        totalAmout: cartState.totalAmout,
        addMeal: add,
        deleteMeal: Delete,
    }}>
        {props.children}
    </Context.Provider>)
}   

import { useReducer } from 'react';
import Context from './context';


const defaultCartState = {
    items: [],
    totalAmout: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const existCartItemIndex = state.items.findIndex((it) => it.id === action.item.id)

            const existItem = state.items[existCartItemIndex]
            let updatedItems;
            let updatedTotalAmount

            updatedTotalAmount = state.totalAmout + action.item.price * action.item.amount
            if (existItem) {

                const updateOneItem = {
                    ...existItem,
                    amount: parseInt(existItem.amount) + parseInt(action.item.amount)
                }
                updatedItems = [...state.items];
                updatedItems[existCartItemIndex] = updateOneItem
            }
            else {

                updatedItems = state.items.concat(action.item);
            }


            return {
                items: updatedItems,
                totalAmout: updatedTotalAmount
            }
        case 'DELETE':
            const it = state.items.filter((item) => item.id === action.id)
            let updatedTotal = state.totalAmout - it.price
            let updateditems
            if (it.amount === 1) {
                updateditems = state.items.filter((item) => item.id !== action.id)
            }
            else {
                const updateOneItem = {
                    ...it,
                    amount: it.amount - 1
                }

                updateditems = [
                    ...state.items,
                    updateOneItem
                ]
            }

            return {
                items: updateditems,
                totalAmout: updatedTotal
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


    const Delete = (idItem) => {

        dispatchCartState({
            type: 'DELETE',
            id: idItem
        })

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

import { createContext } from 'react';


const Context = createContext({
    items: [],
    totalAmout: 0,
    addMeal: () => { },
    deleteMeal: () => { },
})

export default Context;




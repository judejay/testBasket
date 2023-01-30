import { createContext, useReducer } from 'react';
import BasketReducer from '../Reducer';
import { ADD_TO_BASKET } from '../Reducer/types';
export const BasketContext = createContext(null);

const initialState = {
    basketItems: []
};

const BasketState = ({ children }) => {
    const [state, dispatch] = useReducer(BasketReducer, initialState);

    const addToBasket = (currentItem) => {
        dispatch({ type: ADD_TO_BASKET, currentItem: currentItem });
    };

    return (
        <BasketContext.Provider
            value={{
                basketItems: state.basketItems,
                addToBasket
            }}
        >
            {children}
        </BasketContext.Provider>
    );
};

export default BasketState;

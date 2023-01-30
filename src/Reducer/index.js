import { ADD_TO_BASKET } from './types';

const BasketReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            const { basketItems } = state;
            const { currentItem } = action;
            let updatebasketItems = [...basketItems];
            console.log(updatebasketItems, state);
            updatebasketItems.push({
                ...currentItem,
                quantity: +1
            });
            return {
                ...state,
                basketItems: updatebasketItems
            };
        default:
            return state;
    }
};

export default BasketReducer;

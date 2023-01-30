import { ADD_TO_BASKET } from './types';

const BasketReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            const { basketItems } = state;
            const { currentItem } = action;
            let updatebasketItems = [...basketItems];

            const indexOfCurrentItem = updatebasketItems.findIndex((item) => item.item === currentItem.item);
            if (indexOfCurrentItem === -1) {
                updatebasketItems.push({
                    ...currentItem,
                    quantity: 1
                });
            } else {
                const itemAlreadyExits = updatebasketItems.find((item) => item.item === updatebasketItems[indexOfCurrentItem].item);
                updatebasketItems[indexOfCurrentItem] = {
                    ...currentItem,
                    quantity: itemAlreadyExits.quantity + 1
                };
            }

            return {
                ...state,
                basketItems: updatebasketItems
            };
        default:
            return state;
    }
};

export default BasketReducer;

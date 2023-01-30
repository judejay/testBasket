import { ADD_TO_BASKET } from './types';

const BasketReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_BASKET:
            const { basketItems } = state;
            const { currentItem } = action;
            let updatebasketItems = [...basketItems];
            //console.log(updatebasketItems, state);

            const indexOfCurrentItem = updatebasketItems.findIndex((item) => item.item === currentItem.item);
            //console.log(indexOfCurrentItem);
            if (indexOfCurrentItem === -1) {
                updatebasketItems.push({
                    ...currentItem,
                    quantity: 1
                });
            } else {
                const itemAlreadyExits = updatebasketItems.find((item) => item.item === updatebasketItems[indexOfCurrentItem].item);
                console.log('increase quanity', itemAlreadyExits);
                updatebasketItems[indexOfCurrentItem] = {
                    ...currentItem,
                    quantity: itemAlreadyExits.quantity + 1
                };
                // console.log('quantity updated ', updatebasketItems);
                // // set flag for discount in quantity more than specail rate at
                // const discountedItem = updatebasketItems[indexOfCurrentItem].quantity >= parseInt(updatebasketItems[indexOfCurrentItem].discountFor);
                // // console.log(discountedItem);
                // updatebasketItems[indexOfCurrentItem] = {
                //     ...itemAlreadyExits,
                //     discountedItem: discountedItem
                // };
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

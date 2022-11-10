import { legacy_createStore } from 'redux';

const initialState = {
    propertyValue: 200000,
    
};

// Reducer
const propValueReducer = (state = initialState, action) => {
    if (action.type === 'changePropValue' ) {
        return {
            propertyValue: action.value
        };
    }
    return state;
};

const store = legacy_createStore(propValueReducer);

export default store;

// Subscriber 
// const propertyIncreaseSubscriber = () => {
//     const latestState = store.getState();
//     console.log(latestState);
// };

// store.subscribe(propertyIncreaseSubscriber);


// Dispatch action
// store.dispatch({ type: 'increment' });
// store.dispatch({ type: 'decrement' });
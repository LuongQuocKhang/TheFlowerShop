import { combineReducers } from 'redux';
import orderReducer from './orders.reducer';

const rootReducer = combineReducers({
    orders: orderReducer
})

export default rootReducer;
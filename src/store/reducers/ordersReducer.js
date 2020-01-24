import {REQUEST_ORDER_ERROR, REQUEST_ORDER_START, REQUEST_ORDERS_SUCCESS} from "../actions/ordersActions";

const initialState = {
    orders: [],
    loading: false,
};
const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ORDER_START :
            return {...state,loading: true};
        case REQUEST_ORDERS_SUCCESS :
            if (action.orders){
                const orders = Object.keys(action.orders).map(o => ({amount : action.orders[o],id : o}));
                return  {...state, orders};
            }
            return state;
        case REQUEST_ORDER_ERROR :
            return {...state, loading: false};
        default :
            return state;
    }
};

export default ordersReducer;

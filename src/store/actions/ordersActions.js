import axiosDishes from "../../axiosDishes";
import {getAllDishes} from "./dishesActions";

export const REQUEST_ORDER_ERROR = 'REQUEST_ERROR';
export const REQUEST_ORDER_START = 'REQUEST_START';
export const REQUEST_ORDERS_SUCCESS = 'REQUEST_DISHES_SUCCESS';

export const requestOrderStart = () => ({type : REQUEST_ORDER_START});
export const requestOrderError = (e) => ({type : REQUEST_ORDER_ERROR,e});
export const requestOrderSuccess = (orders) => ({type : REQUEST_ORDERS_SUCCESS,orders});

export const getOrders = () => {
  return async dispatch => {
      try {
          dispatch(requestOrderStart());
          let response = await axiosDishes.get('/orders.json');
          dispatch(requestOrderSuccess(response.data));
          dispatch(getAllDishes());
      } catch (e) {
          dispatch(requestOrderError(e));
      }
  }
};
export const completeOrder = (id) => {
    return async dispatch => {
        try {
            dispatch(requestOrderStart());
            await axiosDishes.delete(id + '.json');
            dispatch(getOrders());
        } catch (e) {
            dispatch(requestOrderError(e))
        }
    }
};

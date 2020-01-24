import axiosDishes from "../../axiosDishes";

export const REQUEST_ERROR = 'REQUEST_ERROR';
export const REQUEST_START = 'REQUEST_START';
export const REQUEST_DISHES_SUCCESS = 'REQUEST_DISHES_SUCCESS';

export const requestDishesStart = () => ({type : REQUEST_START});
export const requestDishesError = (e) => ({type : REQUEST_ERROR,e});
export const requestDishesSuccess = (dishes) => ({type : REQUEST_DISHES_SUCCESS,dishes});


export const addNewDish = (dish) => {
  return async dispatch => {
      try {
          dispatch(requestDishesStart());
          await axiosDishes.post('/dishes.json',dish);
          dispatch(getAllDishes());
      } catch (e) {
          dispatch(requestDishesError(e))
      }
  }
};

export const removeDish = (id) => {
  return async dispatch => {
      try {
          dispatch(requestDishesStart());
          await axiosDishes.delete('/dishes/' + id + '.json');
          dispatch(getAllDishes());
      } catch (e) {
          dispatch(requestDishesError(e));
      }
  }
};

export const editDish = (dish) => {
    return async dispatch => {
        try {
            dispatch(requestDishesStart());
            await axiosDishes.put('/dishes/' + dish.id + '.json',dish);
            dispatch(getAllDishes());
        } catch (e) {
            dispatch(requestDishesError(e));
        }
    }
};


export const getAllDishes = () => {
    return async dispatch => {
        try {
            dispatch(requestDishesStart());
            let response = await axiosDishes.get('/dishes.json');
            dispatch(requestDishesSuccess(response.data));
        } catch (e) {
            dispatch(requestDishesError(e));
        }
    };
};

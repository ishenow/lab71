import {REQUEST_DISHES_SUCCESS, REQUEST_ERROR, REQUEST_START} from "../actions/dishesActions";

const initialState = {
    dishes: [],
    loading: false,
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_START :
            return {...state, loading: true};
        case REQUEST_DISHES_SUCCESS :
            if (action.dishes){
                const dishes = Object.keys(action.dishes).map(d => ({...action.dishes[d], id : d}));
                return {...state, loading: false, dishes};
            }
            return {...state, dishes: initialState.dishes};
        case REQUEST_ERROR :
            return {...state, loading: false};
        default :
            return state;
    }
};
export default dishesReducer;

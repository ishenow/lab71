import React, {useEffect} from 'react';
import {getOrders} from "../store/actions/ordersActions";
import {connect} from "react-redux";
import {getAllDishes} from "../store/actions/dishesActions";

const Orders = (props) => {
    useEffect(() => {
        props.getDishes();
        props.getOrders();
    }, []);
    return (
        <div>
            {props.orders.map(order => {
                for (let i = 0; i < props.dishes.length; i++) {
                    if (order.id === props.dishes[i].id) {
                        let d = props.dishes[i];
                        return <div key={order.id}>
                            <span>
                                {order.amount} x {d.title}  price : {d.price}
                            </span>
                            total : <strong>{d.price * order.amount}</strong>
                        </div>
                    }
                }
                return null;
            })}
        </div>
    );
};

const mapStateToProps = (state) => ({
    orders: state.o.orders,
    dishes: state.d.dishes,
});
const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(getOrders()),
    getDishes : () => dispatch(getAllDishes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

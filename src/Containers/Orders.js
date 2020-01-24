import React, {useEffect} from 'react';
import {completeOrder, getOrders} from "../store/actions/ordersActions";
import {connect} from "react-redux";

const Orders = (props) => {
    useEffect(() => {
        props.getOrders();
    }, []);
    const completeOrder =  () => {
        props.complete('orders');
    };
    let total = 0;
    let order = props.orders.map(order => {
        for (let i = 0; i < props.dishes.length; i++) {
            if (order.id === props.dishes[i].id) {
                let d = props.dishes[i];
                total += d.price * order.amount;
                return <div key={order.id}>
                            <span>
                                {order.amount} x {d.title}  price : {d.price}
                            </span>
                    total : <strong>{d.price * order.amount}</strong>
                </div>
            }
        }
        return null;
    });
    return (
        <div>
            {order}
            mainToTal : {total};
            <button onClick={completeOrder}>
                complete order
            </button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    orders: state.o.orders,
    dishes: state.d.dishes,
});
const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(getOrders()),
    complete : (id) => dispatch(completeOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);

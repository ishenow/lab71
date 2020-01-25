import React, {useEffect} from 'react';
import {completeOrder, getOrders} from "../store/actions/ordersActions";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

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
                return <Box>
                          <div key={order.id}>
                            <span>
                                {order.amount} x {d.title}  price : {d.price}
                            </span>
                              total : <strong>{d.price * order.amount}</strong>
                          </div>
                      </Box>

            }
        }
        return null;
    });
    return (
        <Box display="flex" alignItems="center" flexDirection="row" justifyContent="space-around" my={2}>
            {order}
            Total Price: {total}
            <br/>
            <Button variant="outlined" color="primary" onClick={completeOrder} mt={12}>
                complete order
            </Button>
        </Box>
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

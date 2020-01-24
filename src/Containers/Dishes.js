import React, {useEffect, useState} from 'react';
import FormBlock from "../Components/FormBlock/FormBlock";
import {connect} from "react-redux";
import {addNewDish, editDish, getAllDishes, removeDish} from "../store/actions/dishesActions";
import Dish from "../Components/Dish/Dish";
import Modal from "../Components/Modal/Modal";
import Button from "@material-ui/core/Button";

const Dishes = (props) => {
    const [open, setOpen] = useState(false);
    const [editWindow, setEditWindow] = useState(null);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const addDish = (dish) => {
        props.addNewDish(dish);
        handleClose();
    };
  const closeEditWindow = ()  => {
       setEditWindow(null);
   };
  const openEditModal = (d) => setEditWindow(d);
  const editHandler = (dish) => {
      props.editDish(dish);
      closeEditWindow();
  };
    useEffect(() => {
        props.getAllDishes();
    },[props]);
    return (
        <div>
            <Button color="secondary" onClick={handleOpen}>AddDish</Button>
            <Modal show={open} close={handleClose}>
                <FormBlock onSubmitted={addDish}/>
            </Modal>
            dishes
            <hr/>
            {props.dishes.map(d => {
                return <Dish edit={() => openEditModal(d)} remove={() => props.removeDish(d.id)} key={d.id} img={d.img} price={d.price} name={d.title}/>
            })}
            <Modal show={!!editWindow} close={closeEditWindow}>
                <FormBlock dishes={editWindow} onSubmitted={editHandler}/>
            </Modal>
        </div>
    );
};

const mapStateToProps = (state) => ({
    dishes : state.d.dishes
});
const mapDispatchToProps = (dispatch) => ({
   addNewDish : (dish) => dispatch(addNewDish(dish)),
    getAllDishes : (dishes) => dispatch(getAllDishes(dishes)),
    removeDish : (id) => dispatch(removeDish(id)),
    editDish : (editedDish) => dispatch(editDish(editedDish))
});

export default connect(mapStateToProps,mapDispatchToProps)(Dishes);

import React, {useEffect, useState} from 'react';
import FormBlock from "../Components/FormBlock/FormBlock";
import {connect} from "react-redux";
import {addNewDish, editDish, getAllDishes, removeDish} from "../store/actions/dishesActions";
import Dish from "../Components/Dish/Dish";
import Modal from "../Components/Modal/Modal";
import Button from "@material-ui/core/Button";
import {Box} from "@material-ui/core";


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
          <Box display="flex" justifyContent="space-around" alignItems="center" my={1}>
            <span>DISHES</span>
            <Button variant="contained" color="primary" onClick={handleOpen}>AddDish</Button>
          </Box>
            <Modal show={open} close={handleClose}>
                <FormBlock onSubmitted={addDish}/>
            </Modal>
            <hr/>
          <Box display="flex" flexWrap="wrap" justifyContent="space-around" alignItems="flex-start">
            {props.dishes.map(d => {
              return <Dish edit={() => openEditModal(d)} remove={() => props.removeDish(d.id)} key={d.id} img={d.img} name={d.title} price={d.price}/>
            })}
            <Modal show={!!editWindow} close={closeEditWindow}>
              <FormBlock dishes={editWindow} onSubmitted={editHandler}/>
            </Modal>
          </Box>
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

import React, {useEffect, useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {makeStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    paper: {
        width: 400,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 4, 3),
    },
}));

const FormBlock = (props) => {
    const classes = useStyles();
    const [input, setInput] = useState({title: '', img: '', price: ''});
    const inputChangeHandler = event => setInput({...input, [event.target.name]: event.target.value});
    useEffect(() => {
        if (props.dishes){
            setInput(props.dishes);
        }
    },[props.dishes]);
    const formSubmit = event => {
        event.preventDefault();
        props.onSubmitted(input);
        setInput({title: '', img: '', price: ''});
    };
    return (
        <form onSubmit={formSubmit} className={classes.paper} noValidate autoComplete="off">
            <TextField required name="title" value={input.title} onChange={inputChangeHandler} label="Title"/>
            <TextField required type="number" name="price" value={input.price} onChange={inputChangeHandler}
                       label="Price"/>
            <TextField required type="url" name="img" value={input.img} onChange={inputChangeHandler} label="image"/>
            <Button type="submit" color="primary">Submit</Button>
        </form>
    );
};

export default FormBlock;

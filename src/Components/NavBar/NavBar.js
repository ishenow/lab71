import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {NavLink} from "react-router-dom";
import {Box} from "@material-ui/core";

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <Box mr='auto' fontSize="1.5rem">
                    Turtle Pizza
                </Box>
                <NavLink className="nav" exact to="/">
                    <Typography variant="h5" color="inherit">
                        Dishes
                    </Typography>
                </NavLink>
                <NavLink className="nav"  to="/orders">
                    <Typography variant="h5" color="inherit">
                        Orders
                    </Typography>
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

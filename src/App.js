import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Dishes from "./Containers/Dishes";
import Orders from "./Containers/Orders";
import NavBar from "./Components/NavBar/NavBar";
import {Container} from "@material-ui/core";

function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Container maxWidth="md">
                <Switch>
                    <Route path="/" exact component={Dishes}/>
                    <Route path="/orders" component={Orders}/>
                </Switch>
            </Container>
        </BrowserRouter>

    );
}

export default App;

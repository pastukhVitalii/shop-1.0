import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Header from "../components/Header/Header";
import {Route} from 'react-router-dom';
import Shop from "../features/Shop/Shop";

function App() {
    return (
        <div className="App">
            <Header/>
            <Container fixed>
                <Route exact path={'/'} render={() => <Shop/> }/>
            </Container>
        </div>
    );
}

export default App;

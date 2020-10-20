import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Header from "../components/Header/Header";
import {Route} from 'react-router-dom';
import Shop from "../features/Shop/Shop";
import ShoppingCart from "../features/ShoppingCart/ShoppingCart";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {ProductType} from "./productsReducer";

function App() {

    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products)

    return (
        <div className="App">
            <Header/>
            <Container fixed>
                <Route exact path={'/'} render={() => <Shop products={products}/>}/>
                <Route exact path={'/shoppingCart'} render={() => <ShoppingCart products={products}/>}/>
            </Container>
        </div>
    );
}

export default App;
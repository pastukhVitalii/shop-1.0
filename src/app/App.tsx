import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Header from "../components/Header/Header";
import {Route} from 'react-router-dom';
import {Shop} from "../features/Shop/Shop";
import {ShoppingCart} from "../features/ShoppingCart/ShoppingCart";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {addProductsTC, getProductsTC, ProductType} from "./productsReducer";

function App() {

    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsTC())
    }, []);

    const addProduct = useCallback(function (products: ProductType) {
        const thunk = addProductsTC(products)
        dispatch(thunk)
    }, [])

    return (
        <div className="App">
            <Header/>
            <Container fixed>
                <Route exact path={'/'} render={() => <Shop
                    products={products} addProducts={addProduct}
                />}/>
                <Route exact path={'/shoppingCart'}
                       render={() => <ShoppingCart products={products} addProducts={addProduct}/>}/>
            </Container>
        </div>
    );
}

export default App;
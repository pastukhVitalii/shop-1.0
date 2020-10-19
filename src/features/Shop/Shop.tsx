import React, {useEffect} from 'react';
import './Shop.css';
import {Grid, Paper} from "@material-ui/core";
import {MyCard} from "../../components/Card/Card";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {getProductsTC, ProductType} from "../../app/productsReducer";

function Shop() {

    const products = useSelector<AppRootStateType, Array<ProductType>>(state => state.products)

    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getProductsTC())
    }, []);
    return (
        <Grid container spacing={1} justify='center'>
            {products.map(p => {
                return <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                    <MyCard products={p} count={p.count}/>
                </Paper>
            })}
        </Grid>
    );
}

export default Shop;

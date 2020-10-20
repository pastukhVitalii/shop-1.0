import React, {useEffect} from 'react';
import './Shop.css';
import {Grid, Paper} from "@material-ui/core";
import {MyCard} from "../../components/Card/Card";
import {useDispatch} from "react-redux";
import {getProductsTC, ProductType} from "../../app/productsReducer";

type PropsType = {
    products: Array<ProductType>
}

function Shop(props: PropsType) {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductsTC())
    }, []);
    return (
        <Grid container spacing={1} justify='center'>
            {props.products.map(p => {
                return <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                    <MyCard products={p} count={p.count}/>
                </Paper>
            })}
        </Grid>
    );
}

export default Shop;
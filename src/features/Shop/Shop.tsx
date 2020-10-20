import React from 'react';
import './Shop.css';
import {Grid, Paper} from "@material-ui/core";
import {MyCard} from "../../components/Card/Card";
import {ProductType} from "../../app/productsReducer";

type PropsType = {
    products: Array<ProductType>,
    addProducts: (products: ProductType) => void
}

export const Shop = React.memo(function (props: PropsType) {

    return (
        <Grid container spacing={1} justify='center'>
            {props.products.map(p => {
                return <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                    <MyCard products={p} addProducts={props.addProducts}/>
                </Paper>
            })}
        </Grid>
    );
})


import React from 'react';
import './Shop.css';
import {Grid, Paper} from "@material-ui/core";
import {MyCard} from "../../components/Card/Card";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {ProductType} from "../../app/productsReducer";

function Shop() {

    let propucts = useSelector<AppRootStateType, Array<ProductType>>(state => state.products.products)
    return (
        <Grid container spacing={1} justify='center'>
            {propucts.map(p => {
                return <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                    <MyCard product={p}/>
                </Paper>
            })}
        </Grid>
    );
}

export default Shop;

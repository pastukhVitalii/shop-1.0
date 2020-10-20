import React from 'react';
import './ShoppingCart.css';
import {Grid} from "@material-ui/core";
import {ShoppingBlank} from "../../components/ShoppingBlank/ShoppingBlank";
import {ProductType} from "../../app/productsReducer";

type PropsType = {
    products: Array<ProductType>
}

function ShoppingCart(props: PropsType) {

    let products = props.products.map(p =>  <ShoppingBlank products={p}/>)
    return (
        <Grid container spacing={4} >
            <Grid item xs={8}>
                {products}
            </Grid>
            <Grid item xs={4}>
                <div style={{backgroundColor: 'red', width: '100%'}}>f</div>
            </Grid>
        </Grid>
    );
}

export default ShoppingCart;
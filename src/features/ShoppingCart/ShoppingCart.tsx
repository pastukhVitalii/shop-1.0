import React from 'react';
import './ShoppingCart.css';
import {Grid} from "@material-ui/core";
import {ShoppingBlank} from "../../components/ShoppingBlank/ShoppingBlank";

function ShoppingCart() {
    return (
        <Grid container spacing={4} >
            <Grid item xs={8}>
                <ShoppingBlank products={{id: '2', title: 'Asus', price: 799, count: 0}}/>
            </Grid>
            <Grid item xs={4}>
                <div style={{backgroundColor: 'red', width: '100%'}}>f</div>
            </Grid>
        </Grid>
    );
}

export default ShoppingCart;

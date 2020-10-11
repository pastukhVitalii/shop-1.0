import React from 'react';
import './Shop.css';
import {Grid, Paper} from "@material-ui/core";
import {MyCard} from "../../components/Card/Card";

function Shop() {
    return (
        <Grid container spacing={1} justify='center'>
            <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                <MyCard/>
            </Paper>
            <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                <MyCard/>
            </Paper>
        </Grid>
    );
}

export default Shop;

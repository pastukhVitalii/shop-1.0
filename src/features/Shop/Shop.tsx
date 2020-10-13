import React from 'react';
import './Shop.css';
import {Grid, Paper} from "@material-ui/core";
import {api} from "../../api/apiCard";
import {MyCard} from "../../components/Card/Card";

function Shop() {

    return (
        <Grid container spacing={1} justify='center'>
            {api.map(p => {
                return <Paper style={{backgroundColor: 'blue', margin: '30px', width: '300px', height: '400px'}}>
                    <MyCard product={p}/>
                </Paper>
            })}
        </Grid>
    );
}

export default Shop;

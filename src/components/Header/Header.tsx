import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {ShoppingCart} from "@material-ui/icons";
import './Header.css';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

export default function Header() {
    const useStyles = makeStyles({
        root: {
            width: '100%',
            height: '100%',
            backgroundColor: 'blanchedalmond'
        },
    });
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    return (
        <div className='header'>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                color="primary"
                className={classes.root}
            >
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                >
                    <NavLink to={'/'}><BottomNavigationAction label="Main page" icon='Main page' style={{height: '100%'}}/></NavLink>
                    <NavLink to={'/shoppingCart'}><BottomNavigationAction label="ShoppingCart" icon={<ShoppingCart />}/></NavLink>
                </Grid>
            </BottomNavigation>
        </div>
    );
}

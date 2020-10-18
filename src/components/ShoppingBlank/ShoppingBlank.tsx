import React, {useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    createStyles,
    Grid,
    IconButton,
    Theme,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Add, Remove} from "@material-ui/icons";
import {ProductType} from "../../app/productsReducer";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: '100%',
            marginTop: '30px',
        },
        media: {
            height: '100%',
            backgroundColor: 'red'
        },
    }),
);

export type PropsType = {
    products: ProductType
}

export type CardType = {
    onAddItem?: () => void,
    onDeleteItem?: () => void,
}

export function ShoppingBlank(props: PropsType & CardType) {

    const classes = useStyles();

    const [count, setCount] = useState(1);

    const onAddItem = () => {
        setCount(count + 1);
    }

    const onDeleteItem = () => {
        setCount(count - 1);
    }

    return (
        <Card className={classes.root}>
            <Grid container>
                <Grid item xs={3}>
                    <CardMedia
                        className={classes.media}
                        image="/static/images/cards/paella.jpg"
                        title={props.products.title}
                    />
                </Grid>
                <Grid item xs={5}>
                    <CardHeader
                        title={props.products.title}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This impressive paella is a perfect party dish and a fun meal to cook together with your
                            guests. Add 1 cup of frozen peas along with the mussels, if you like.
                        </Typography>
                        <Typography style={{padding: '10px 0 0 10px'}}>
                            price: {props.products.price} $
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid container item xs={4}>
                    <Grid container justify={'center'}>
                        <CardActions>
                            <IconButton onClick={onDeleteItem} disabled={!count}>
                                <Remove/>
                            </IconButton>
                            <div>
                                {count}
                            </div>
                            <IconButton onClick={onAddItem} disabled={count >= 10}>
                                <Add/> {count === 10?<div style={{color: 'tomato', fontSize: '14px'}}>Max count !!</div>: ''}
                            </IconButton>
                        </CardActions>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}
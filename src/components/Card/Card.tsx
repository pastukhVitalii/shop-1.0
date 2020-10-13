import React from 'react';
import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    createStyles,
    IconButton,
    Theme,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Add, Remove} from "@material-ui/icons";
import {ProductType} from "../../api/apiCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 0,
            paddingTop: '56.25%',
        },
    }),
);

export type PropsType = {
    product: ProductType
}

export type CardType = {
    onAddItem?: () => void,
    onDeleteItem?: () => void,
}

export function MyCard(props: PropsType & CardType) {

    const classes = useStyles();

    let onAddItem = () => {
        // alert('add')
    }
    const onDeleteItem = () => {
        // alert('delete')
    }

    return (
        <Card className={classes.root}>
            <CardHeader
                title={props.product.title}
                // subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title={props.product.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={onAddItem}>
                    <Add/>
                </IconButton>
                <IconButton onClick={onDeleteItem}>
                    <Remove/>
                </IconButton>
                <span style={{marginLeft: '150px'}}>{props.product.price} $</span>
            </CardActions>
        </Card>
    );
}
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {ref} from "../index";
import * as firebase from "firebase";

export type ProductType = {
    id: string,
    title: string,
    price: number,
    count: number
};

const initialState: Array<ProductType> = [];
/*{id: '1', title: 'Apple', price: 999, count: 0},
{id: '2', title: 'Asus', price: 799, count: 0},*/

export const slice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProductAC(state, action: PayloadAction<{ products: Array<ProductType> }>) {
            return action.payload.products;
        },
        getProductsAC(state, action: PayloadAction<{ products: Array<ProductType> }>) {
            return action.payload.products.map(tl => ({...tl}));
        }
    }
});

export const {addProductAC, getProductsAC} = slice.actions;
export const productsReducer = slice.reducer;

export const getProductsTC = () => {
    return (dispatch: Dispatch<any>) => {
        ref.on('value', (snapshot) => {
            dispatch(getProductsAC(snapshot.val()))
        })
    }
};

export const addproductsTC = (products: ProductType) => {
    // get one product from props !!
    return (dispatch: Dispatch<any>) => {
        const db = firebase.database();
        const productId = products.id; // get id product
        // path to count
        const productItem = db.ref(`products/${productId}/count`);
        // write new count and read count
        productItem.transaction(function (currentCount) {
            return currentCount + 1
        })
        // read all products
        ref.on('value', (snapshot) => {
            // dispatch all products !!
            dispatch(addProductAC(snapshot.val()))
        })
    }
};
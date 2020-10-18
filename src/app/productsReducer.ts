import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Dispatch} from "react";
import {name} from "../index";

export type ProductType = {
    id: string,
    title: string,
    price: number,
    count: number
}

const initialState: Array<ProductType> = [];
/*{id: '1', title: 'Apple', price: 999, count: 0},
{id: '2', title: 'Asus', price: 799, count: 0},*/


export const slice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProductAC(state, action: PayloadAction<{ products: ProductType }>) {
            const index = state.findIndex(i => i.id === action.payload.products.id);
            state[index].count = action.payload.products.count + 1
        },
        getProductsAC(state, action: PayloadAction<{ products: Array<ProductType> }>) {
            debugger
            return action.payload.products.map(tl => ({...tl}));
        }
    }
})

export const {addProductAC, getProductsAC} = slice.actions;
export const productsReducer = slice.reducer;

export const getProductsTC = () => {
    return (dispatch: Dispatch<any>) => {
        name.on('value', (snapshot) => {
            dispatch(getProductsAC(snapshot.val()))
        })
    }
}

export const addproductsTC = () => {
    /*return (dispatch: Dispatch<any>) => {
        name.on('value', (snapshot) => {
            dispatch(addProductAC(snapshot.val()))
        })
    }*/
}

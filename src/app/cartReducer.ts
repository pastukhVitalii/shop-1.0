import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductType} from "./productsReducer";

type initialStateType = {
    products: Array<ProductType>
}

const initialState: initialStateType = {
    products: [],
}

export const slice = createSlice({
name: 'cart',
    initialState: initialState,
    reducers: {
        addProduct(state, action: PayloadAction<any>) {
            return state
}
    }
})

export const cartReducer = slice.reducer;
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ProductType = {
    id: string,
    title: string,
    price: number,
    count: number
}

type initialStatType = {
    products: Array<ProductType>
}

const initialState: initialStatType = {
    products: [
        {id: '1', title: 'Apple', price: 999, count: 0},
        {id: '2', title: 'Asus', price: 799, count: 0},
    ]
}

export const slice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProductAC(state, action: PayloadAction<{ product: ProductType }>) {
            debugger;
            const index = state.products.findIndex(i => i.id === action.payload.product.id);
            state.products[index].count = action.payload.product.count + 1
        }
    }
})

export const {addProductAC} = slice.actions;
export const productsReducer = slice.reducer;


/*export const addproductTC = () => {
    return (dispatch: Dispatch) => {
        api.addProductApi()
            .then((res) => {
                dispatch(addProductAC({count: res.count}))
            })
    }
}*/

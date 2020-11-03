import React from 'react';
import {PropsType, ShoppingBlank} from "./ShoppingBlank";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Shopping Blank',
    component: 'ShoppingBlank',
};

export const ShoppingBlanks  = (props: PropsType) => {
    return (
        <ShoppingBlank products={{id: '1', title: 'Apple', price: 99, count: 0}}
                       addProducts={action('add item callback')}
                       deleteProducts={action('add delete callback')}
                       onAddItem={action('add item')}
                       onDeleteItem={action('delete item')}/>
    )
};
import React from 'react';
import {PropsType, ShoppingBlank} from "./ShoppingBlank";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/Shopping Blank',
  component: 'ShoppingBlank',
  product: {id: '2', title: 'Asus', price: 799}
};

export const ShoppingsBlank = (props: PropsType) => {
  return (
      <ShoppingBlank product={{id: '1', title: 'Apple', price: 99, count: 0}}
              onAddItem={action('add item')}
              onDeleteItem={action('delete item')}/>
  )
};
import React from 'react';
import {MyCard, PropsType} from "./Card";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/Card',
  component: MyCard,
  product: {id: '2', title: 'Asus', price: 799}
};

export const CardAdd = (props: PropsType) => {
  return (
      <MyCard product={{id: '1', title: 'Apple', price: 99, count: 0}}
              onAddItem={action('add item')}
              onDeleteItem={action('delete item')}/>
  )
};
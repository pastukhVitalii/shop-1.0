// export const aaa = 1;

import React from 'react';
import {MyCard, PropsType} from "./Card";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Example/Card',
  component: MyCard
};

export const CardAdd = (props: PropsType) => {
  return (
      <MyCard products={{id: '1', title: 'Apple', price: 99, count: 0}}
              onAddItem={action('add item')}
              onDeleteItem={action('delete item')}/>
  )
};

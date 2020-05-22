import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from './Button';

export default {
  component:Button,
  title:'Common/Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

//export const clearCompletedButton=()=> <Button onClick={action('clicked')} >clear Completed</Button>;

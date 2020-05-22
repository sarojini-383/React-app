import React from 'react';
import { action } from '@storybook/addon-actions';
import {Select} from './SelectTag';

export default {
  component: Select,
  title: 'Common/SelectTag',
};

export const text = () => <Select>
<option>Hi</option>
<option>Hello</option>
</Select>;


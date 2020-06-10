import React from 'react';
import { action} from '@storybook/addon-actions';
import { withKnobs,text,color} from '@storybook/addon-knobs'

import {Button} from './Paginator';

import Paginator from './Paginator.js';

export default {
  component:Paginator,
  title:'Common/Paginator'
}
  
export const paginator = () => <Paginator />;

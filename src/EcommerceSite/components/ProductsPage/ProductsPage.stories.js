import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from '../../../common/Button/Button.js';
import { withKnobs,color} from '@storybook/addon-knobs'

import {
    SignOutBtn,
} from './styledComponent';


export default {
  component:Button,
  title:'Common/Button/SignOutBtn',
};

export const defaultView = () => <SignOutBtn >SignOut</SignOutBtn>;

export const knobs = () => <SignOutBtn backgroundColor={color("bg-color","white")}  color={color('color','black')} onClick={action('clicked')}>SignOut</SignOutBtn>;

knobs.story={
  decorators:[withKnobs]
}


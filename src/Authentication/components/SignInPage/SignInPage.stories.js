import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from '../../../common/Button/Button.js';
import { withKnobs,color} from '@storybook/addon-knobs'

import {
    SignInBtn,
} from '../../styledComponent';


export default {
  component:Button,
  title:'Common/Button/SignInButton',
};

export const defaultView = () => <SignInBtn >SignIn</SignInBtn>;

export const knobs = () => <SignInBtn color={color("fill","red")} onClick={action('clicked')}>SignIn</SignInBtn>;

knobs.story={
  decorators:[withKnobs]
}


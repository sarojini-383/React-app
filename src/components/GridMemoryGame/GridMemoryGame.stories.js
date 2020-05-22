import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from '../../common/Button/Button.js';
import { withKnobs,text,color} from '@storybook/addon-knobs'

import {
  ThemeStyle
} from './styledcomponent'

export default {
  component:Button,
  title:'Common/Button/ThemeButton',
};

export const defaultView = () => <ThemeStyle backgroundColor={color("bg-color","white")}  color={color('color','black1')}>{text('theme','Dark')}</ThemeStyle>;

defaultView.story={
  decorators:[withKnobs]
}
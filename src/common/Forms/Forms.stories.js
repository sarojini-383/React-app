import React from 'react';
import { action} from '@storybook/addon-actions';
import { withKnobs,text,color} from '@storybook/addon-knobs'

import {Forms,InputField} from './Forms';


export default {
  component:Forms,
  title:'Common/Forms'
}

// export const input=()=>
//   <InputField ></InputField>

//export const textq = () => <Button onClick={action('clicked')}>Hello Button</Button>;


// export const checkbox=()=>{
//   <input type="checkbox" />
// }



// input.story={
//   decorators:[withKnobs]
// }
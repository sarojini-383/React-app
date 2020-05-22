import React from 'react'

import { withKnobs, text ,color} from '@storybook/addon-knobs'



import LoadingView from './LoadingView'
import Loader from "../Icons/Loader";

export default {
   component: LoadingView,
   title: 'Common/LoadingView',
 //  decorators: [storyFn => <div style={{ backgroundColor: 'green' }}>{storyFn()}</div>],
}

export const defaultView = () => <LoadingView />



export const fillWithColor = () => (

   <Loader
   fill={color("fill","red")} />

)

fillWithColor.story = {
   decorators: [withKnobs]
}

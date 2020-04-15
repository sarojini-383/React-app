import React from 'react';
import {observer} from 'mobx-react'
import {GridGameHeader,ThemeStyle} from '../styledcomponent.js'
import gameStore from '../../../stores/GameStore'

@observer
class Header extends React.Component {
  
    render() {
        console.log(gameStore.level)
        return (
            <GridGameHeader>
            <div>Level:{gameStore.level}</div>
            <ThemeStyle>Mode: Dark</ThemeStyle>
            </GridGameHeader>
        );
    }

}

export default Header 

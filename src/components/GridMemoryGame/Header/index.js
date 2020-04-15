import React from 'react';
import {GridGameHeader,ThemeStyle} from '../styledcomponent.js'


class Header extends React.Component {
  
    render() {
        return (
            <GridGameHeader>
            <div>Level:0</div>
            <ThemeStyle>Mode: Dark</ThemeStyle>
            </GridGameHeader>
        );
    }

}

export default Header 

import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import themeStore from '../../../stores/ThemeStore';
import {GridGameHeader,ThemeStyle} from '../styledcomponent.js';

@observer
class Header extends React.Component {
@observable theme='Dark';

  onChangeSelectedTheme=()=>{
    themeStore.setCurrentTheme(this.theme);
    this.theme=themeStore.selectedTheme;
  }
  
  render() {
    const {gridWidth,level}=this.props;
    
    return (<GridGameHeader width={gridWidth} theme={this.theme} >
                <p>Level:{level}</p>
                <ThemeStyle onClick={this.onChangeSelectedTheme} >
                Mode: Dark</ThemeStyle></GridGameHeader>);
      }
}

export default Header ;

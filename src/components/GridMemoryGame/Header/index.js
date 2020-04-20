import React from 'react';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

import gameStore from '../../../stores/GameStore';
import themeStore from '../../../stores/ThemeStore';
import {GridGameHeader,ThemeStyle} from '../styledcomponent.js';
import gridInfo from '../Json.js'

@observer
class Header extends React.Component {
@observable theme='Dark';

  onChangeSelectedTheme=()=>{
    themeStore.setCurrentTheme(this.theme);
    this.theme=themeStore.selectedTheme;
  }
  render() {
    const gridWidth=gridInfo[gameStore.level].gridWidth;
    return (<GridGameHeader width={`${gridWidth}px`} theme={this.theme} >
                <p>Level:{gameStore.level}</p>
                <ThemeStyle onClick={this.onChangeSelectedTheme} >
                Mode: Dark</ThemeStyle></GridGameHeader>);
      }
}

export default Header ;

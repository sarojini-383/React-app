import React from 'react';
import { IoIosSearch } from 'react-icons/io';

class SearchCountry extends React.Component {
    state = {
        selectedRegion: 'all'
    }
    onSubmit = (e) => {
            this.props.onChangeSearchText(e.target.value)
    }

    render() {
        return <div className={this.props.selectedTheme === 'Dark mode' ?'search-dark-mode':'search-light-mode'}>
        <IoIosSearch style={{fontSize:'30px'}}/>
        <input className={this.props.selectedTheme === 'Dark mode' ?'dark-mode-input':'light-mode-input'} onChange={this.onSubmit} 
        type = "text"
        placeholder = "Search for a country..." /></div>  }
}

export { SearchCountry }

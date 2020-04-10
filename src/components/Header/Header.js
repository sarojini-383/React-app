import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    onChangeTheme = (event) => {
        this.props.onChangeTheme()
    }

    render() {
        return (
            <div className={this.props.selectedTheme === 'Dark mode' ?'header-dark-mode':'header-light-mode'}>
            <h3>Where in the Country?</h3>
            
            <div onClick={this.onChangeTheme} >
            <span>{this.props.selectedTheme}</span>&#9790;</div>
            
            </div>
        );
    }

}

export { Header }

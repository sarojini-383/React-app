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
            
            <div onClick={this.onChangeTheme} >&#9790;
            <span>{this.props.selectedTheme}</span></div>
            
            </div>
        );
    }

}

export { Header }

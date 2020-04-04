import React from 'react';
let updatedState;
class DisableOrEnable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDisableButtonChecked: false,
            showMessage: false,
        }
    }

    handleChange = (e) => {
        this.setState({ isDisableButtonChecked: e.target.checked });
    }

    handleSubmit = (e) => {

        e.preventDefault();
        this.displayMessage();
        updatedState = this.state.submittedState;
    }

    displayMessage = () => {
        this.setState({
            showMessage: true
        });

    }

    render() {
        return (

            <form>
      
       <div className="main-container" >
       <input type="checkbox" onChange={this.handleChange} />
       <label>Disable</label>
        <button className="btn" disabled={this.state.isDisableButtonChecked} type="submit" onClick={this.handleSubmit} >Click Me</button>
          </div>
          {this.state.showMessage || this.state.isDisableButtonChecked  && <p>I am Disabled</p>}
           {this.state.isDisableButtonChecked || this.state.showMessage &&<p>hi ,I am Enabled</p>}
    
            </form>
        );
    }
}

export { DisableOrEnable }

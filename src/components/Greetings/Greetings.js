import React from 'react';
let updatedName;
class Greetings extends React.Component {

    state = {
        userInput: '',
        displayName: false
    }


    handleUserInput = (e) => {
        this.setState({ userInputText: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.displayMessage();
        updatedName = this.state.userInputText
        this.setState({ userInputText: '' });
    }

    displayMessage = () => {
        this.setState({
            displayName: true
        });
    }


    
    render() {
        return (
            <div className="greetings-container">
        <div className="greetings-nav-bar">
         <button class="back-icon"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>
    </button>
        Greetings</div>
        <form onSubmit={this.handleSubmit}>
          <input className="user-input" type="text" placeHolder="Enter the Name" onChange={this.handleUserInput} value={this.state.userInputText} />
          <button className="greet-button" type="submit" onClick={this.handleSubmit}>Greet</button>
          {this.state.displayName && <p>Hello {updatedName}, have a nice day..!</p>}
        </form>
      </div>
        );
    }
}

export { Greetings }

import React from 'react';
let updatedState;
class YourState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedState: false,
            submittedState: '',
        }
    }

    handleChangeState = (e) => {
        this.setState({ submittedState: e.target.value });
    }

    handleSubmit = (e) => {
        alert(this.state.submittedState)
        e.preventDefault();
        this.displayMessage();
        updatedState = this.state.submittedState;
    }

    displayMessage = () => {
        this.setState({
            selectedState: true
        });

    }

    renderSateteList = (e) => {
        return this.props.list.map(item =>
            <option type="radio" value={item} name="state">{item}</option>)
    }

    render() {
        return (
            <div className="main-container">
        <div className="nav-bar">
         <button class="back-icon"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>
    </button>
        Your State</div>
            <form>
        <select className="select-block" onChange={this.handleChangeState} >{this.renderSateteList()}</select>  
        <button className="btn" type="submit" onClick={this.handleSubmit} >Submit</button>
          {this.state.selectedState && <p>Iam from {updatedState}</p>}
        </form>
        </div>
        );
    }
}

export { YourState }

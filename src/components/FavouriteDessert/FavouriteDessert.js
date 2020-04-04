import React from 'react';
let updatedDessert;
class FavouriteDessert extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedDessert: false,
            favouriteDessert: '',
        }
    }

    handleUserInput = (e) => {
        this.setState({ favouriteDessert: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.displayMessage();
        updatedDessert = this.state.favouriteDessert;
    }

    displayMessage = () => {
        this.setState({
            selectedDessert: true
        });

    }
    OnNavigateBack = () => {
        const { History } = this.props;
        History.goBack()

    }
    renderdessertList = (e) => {
        return this.props.list.map(item => <div className="dessert-field">
        <input type="radio" value={item} name="dessert"/>
        <lablel>{item}</lablel>
        </div>)
    }

    render() {
        return (

            <div className="main-container">
        <div className="nav-bar">
         <button class="back-icon" onClick={this.OnNavigateBack()}><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M-3-3h22v22H-3z"></path><path fill="#FFF" d="M15.333 7.083H4.178L9.302 1.96 8 .667.667 8 8 15.333l1.293-1.292-5.115-5.124h11.155z"></path></g></svg>
    </button>
        Favourite Cities</div>
            <form>
        <p>What is your favourite dessert</p>
        <div onChange={this.handleUserInput} >{this.renderdessertList()}</div>  
        <button className="btn" type="submit" onClick={this.handleSubmit} >Make Your Choice</button>
          {this.state.selectedDessert && <p>My Favourite Dessert is {updatedDessert}</p>}
        </form>
        </div>
        );
    }
}

export { FavouriteDessert }

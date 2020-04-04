import React from 'react';


let carId = 2;

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = { status: false, speed: 0 };
        this.removeCar = this.props.removeCarFromCarsList;
        this.carNum = this.props.id;
        this.startStopBtnClass = "start-btn";
        this.deceBtnClass = "decelerateOff";
    }

    onStartOrStop = () => {
        this.setState(state => ({
            status: !state.status
        }));
        this.displayStatusText();
        if (this.startStopBtnClass === 'start-btn') {
            this.startStopBtnClass = "stop-btn"
        }
        else {
            this.startStopBtnClass = "start-btn";
            this.state.speed = 0;
        }
    }

    onApplyBrake = () => {
        if (this.state.status) {
            this.setState(state => ({
                speed: state.speed - 10
            }));
        }
        if (this.state.speed <= 10) {
            this.deceBtnClass = "decelerateOff"
        }
        else {

            this.deceBtnClass = "decelerateOn"
        }

        this.displayStatusText();
    }
    onAccelerate = () => {
        if (this.state.status) {
            this.setState(state => ({
                speed: state.speed + 10
            }));
        }
        this.displayStatusText();
    }
    displayStatusText = () => {

        let displayTxt;
        if (!this.state.status) {
            displayTxt = 'Stopped'
        }
        else if (this.state.speed <= 0) {
            displayTxt = 'Running'
        }
        else if (this.state.speed > 0) {
            displayTxt = `Running  with ${this.state.speed} Kmph`;
        }
        return displayTxt;
    }
    render() {
        return <div className="car-container">
        
        <div className="car-name">
        <p className="car-id">Car{this.props.id}</p>
        <button className="remove-btn" onClick={()=>this.removeCar(this.carNum)}>x</button>
        </div>
        <button className={this.startStopBtnClass} onClick= {this.onStartOrStop} >{this.state.status  ? 'Stop':'Start'}</button>
        <p className="car-status-txt">Status:{this.displayStatusText()}</p>
        <div className="control-btns">
        <button className="accelerate-btn" onClick={this.onAccelerate}>accelerate</button>
        <button className={this.deceBtnClass} onClick= {this.onApplyBrake}>Apply brake</button>
        </div>
        </div>
    }
}

// ReactDOM.render(

//     <Car />,
//     document.getElementById('root'),
// );

class CarsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { carsList: [1] };
    }
    addCarToCarsList = () => {

        let idValue = carId;
        this.setState(state => ({
            carsList: state.carsList = [...state.carsList, idValue]
        }));
        carId++;

    }
    removeCarFromCarsList = (carNum) => {

        let ary = [...this.state.carsList];

        let index = ary.indexOf(parseInt(carNum));
        ary.splice(parseInt(index), 1);
        if (ary.length === 0) {
            carId = 1;
        }
        else {
            carId = parseInt(ary[ary.length - 1], 10) + 1;
        }
        this.setState({
            carsList: ary
        });
    }
    // renderCarsList = () => {

    // }
    

    render() {
        return <div>
 <button className="add-btn" onClick={this.addCarToCarsList}>Add Car</button>
 <div>
 {this.state.carsList.map((idValue)=>
 <Car id={idValue.toString()}   removeCarFromCarsList={this.removeCarFromCarsList}/>)}
 </div>
      </div>
    }
}


export { CarsList };

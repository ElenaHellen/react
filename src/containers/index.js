import React from 'react';
import Register from '../components';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            displayForm: false,
            displayCounter: false,
        };
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
        this.handleIncrementCounter = this.handleIncrementCounter.bind(this)
        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this)
    }
    
    handleIncrement() {
        this.setState({
            currentValue: this.state.displayCounter + 1,
            displayCounter: !this.state.currentValue,
        });
    }

    handleIncrementCounter() {
        this.setState({
            displayCounter: this.state.displayCounter + 1,
        });
    }

    handleDecrement() {
        this.setState({
            currentValue: this.state.currentValue - 1,
        });
    }
    
    changeDisplayFormStatus() {
            
        this.setState({
            displayForm: !this.state.displayForm,
        });
    }

render() {
    return (
    <Register 
        handleIncrement={this.handleIncrement} 
        handleDecrement={this.handleDecrement}
        handleIncrementCounter={this.handleIncrementCounter} 
        displayCounter={this.state.displayCounter}
        currentValue={this.state.currentValue}
        displayForm={this.state.displayForm}
        changeDisplayFormStatus={this.changeDisplayFormStatus}
    />
    );
    
}

}

export default RegisterContainer
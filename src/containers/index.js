import React from 'react';
import Register from '../components';

class RegisterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            displayForm: false,
            count: 0,
        };
        this.handlerAddCounter = this.handlerAddCounter.bind(this)
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)

        this.changeDisplayFormStatus = this.changeDisplayFormStatus.bind(this)

    }

    handlerAddCounter = () => {
        this.setState(prevstate => ({ count: prevstate.count +1}));
    }

    handleIncrement() {
        this.setState({
            currentValue: this.state.currentValue + 1,
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
        return ( <
            Register handlerAddCounter = { this.handlerAddCounter }
            count = { this.state.count }
            handleIncrement = { this.handleIncrement }
            handleDecrement = { this.handleDecrement }
            currentValue = { this.state.currentValue }

            displayForm = { this.state.displayForm }
            changeDisplayFormStatus = { this.changeDisplayFormStatus }
            />
        );

    }

}

export default RegisterContainer

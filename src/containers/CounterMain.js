import React from 'react';
import RegisterContainer from '../components';
import Count from '../components';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           countValue: [],
           
        };
        this.countAdd = this.countAdd.bind(this)
        
    }
    countAdd() {
        this.setState({ 
            countValue: [this.state.countValue, <RegisterContainer />]
         });
    
}
        render() {
            return ( <Count
                countAdd={this.countAdd}
                countValue = { this.state.countValue }
                />
            );
    
        }
    
    }
    
export default Counter

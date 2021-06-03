import React from 'react';
import RegisterContainer from '../components';
import Count from '../components';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           count: [],
           
        };
        this.CountAdd = this.CountAdd.bind(this)
        
    }
    CountAdd() {
        this.setState({ 
             count: [this.state.count, <RegisterContainer />] 
         });
    
}
        render() {
            return ( <Count
                CountAdd={this.state.CountAdd}
                count = { this.state.count }
                />
            );
    
        }
    
    }
    
export default Counter

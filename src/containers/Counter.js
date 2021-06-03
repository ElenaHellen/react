import React from 'react';
import Count from '../components';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           count: [],
           
        };
        this.handleCountAdd = this.handleCountAdd.bind(this)
        
    }
    CountAdd() {
        this.setState(prevstate =>({count:[...prevstate.count, <Count />]}))
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

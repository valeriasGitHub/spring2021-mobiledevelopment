import React, {Component} from 'react'

class Laps extends Component {
    constructor(props) {
        super(props);
        this.state= {
            Runlaps: 0
        };
    };

render(){
    return(
        <div>
            <h2>Run laps: {this.state.Runlaps}</h2>
            <button onClick={()=>this.setState({Runlaps: this.state.Runlaps + 1})}>+1 lap</button>
            <button onClick={()=>this.setState({Runlaps: 0})}>Reset Counter</button>
        </div>
    )
}
}
export default Laps;
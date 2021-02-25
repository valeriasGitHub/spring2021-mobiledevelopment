import React, {Component} from 'react'

class laps extends Component {
    constructor(props) {
        super(props);
        this.state= {
            Runlaps: 0
        }
    }

render(){
    return(
        <div>
            <h2>Run laps: {this.state.Runlaps}</h2>
            <button onclick={()=>this.setState({laps: this.state.laps + 1})}>+1 lap</button>
        </div>
    )
}
}
export default laps;
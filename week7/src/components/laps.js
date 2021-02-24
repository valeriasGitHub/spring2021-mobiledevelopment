import React, {Component, components} from 'react'

class laps extends Component {
    constructor(props) {
        super(props);
        this.state= {
            laps: 0
        }
    }

render(){
    return(
        <div>
            <h2>Run laps: {this.state.laps}</h2>
            <button onclick={()=>this.setState({laps: this.state.laps + 1})}>+1 lap</button>
        </div>
    )
}
}
export default laps;
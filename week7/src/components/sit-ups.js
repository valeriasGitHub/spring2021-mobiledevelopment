import React, {Component} from 'react'

class sitUps extends Component {
    constructor(props) {
        super(props);
        this.state= {
            sitUps: 0
        }
    }

render(){
    return(
        <div>
            <h2>Sit-ups: {this.state.sitUps}</h2>
            
        </div>
    )
}
}
export default sitUps;
import React from 'react';

function laps (props) {
    
    return (
        <div>
            <h2>laps:{props.state.laps}</h2>
            <button onClick={()=> props.dispatch({"type": "increment1"})}>Add lap</button>
            <button onClick={()=> props.dispatch({"type": "decrement1"})}>Remove lap</button>
        </div>
    )
}
export default laps;
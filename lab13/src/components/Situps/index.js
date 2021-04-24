import React from 'react';

function situps (props) {
    
    return (
        <div>
            <h2>Sit ups:{props.state.situps}</h2>
            <button onClick={()=> props.dispatch({"type": "increment2"})}>Add Situp</button>
            <button onClick={()=> props.dispatch({"type": "decrement2"})}>Remove situp</button>
        </div>
    )
}
export default situps;
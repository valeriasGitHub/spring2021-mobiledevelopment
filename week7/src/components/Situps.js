import React, {useState} from 'react'

function Situps () {
    const [sitUps, setsitUps] = useState (0);

    return (
        <div>
            <h2>Sit ups:{sitUps}</h2>
            <button onClick={()=> setsitUps(sitUps+1)}>+ 1 Sit up</button>
            <button onClick={()=> setsitUps(0)}>Reset Counter</button>
        </div>
    )
}
export default Situps;
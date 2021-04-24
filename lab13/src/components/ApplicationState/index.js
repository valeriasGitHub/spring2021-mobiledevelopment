let state = {
    laps: 0,
    situps: 0
};
function reducer (state, action) {
    switch (action.type) {
        case 'increment1': 
            return {laps: state.laps + 1, situps: state.situps};
        case 'increment2' :
            return {laps: state.laps, situps: state.situps + 1};
        case 'decrement1':
            return {laps: state.laps - 1, situps: state.situps};
        case 'decrement2' :
            return {laps: state.laps, situps: state.situps -1};
        default:
          throw new Error();  

     }
}

export {state,reducer};
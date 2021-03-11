
import { Component } from 'react';
import './App.css';
import Laps from './components/Laps';
import Situps from './components/Situps';
import Tips from './components/Tips';

class App extends Component {
    state = {
    visible : true
  };

  handleHide= () => {
    this.setState({
      visible: false
    })
  }
  render() {
  return (
    <div className="App">
      {this.state.visible ? <Tips/> : null }
      <button 
      onClick={this.handleHide}>
        Hide Tips
      </button>
      <h1>Exercise Tracker:</h1>
      <Laps/>
      <Situps/>
      
    </div>
    
    
  );
}
}

export default App;

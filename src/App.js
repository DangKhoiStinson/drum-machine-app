import React from 'react';
import './App.css';
import DrumPad from './Components/DrumPad.js';

class App extends React.Component{
  render(){
    return(
        <div className="_content">
        	<h1>Drum Keyboard!</h1>
        	<h3>Just click one of these button and the sound will be played :)</h3>
             <DrumPad />
        </div>
    );
  }
}

export default App;

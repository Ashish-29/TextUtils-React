import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import About from './Components/About';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () => {
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383736';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    < >
      <Navbar title="Text_Utils" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        <TextForm heading='Enter text to analyze below' mode={mode}/>
      </div>
      <hr style={{color:mode==='light'?'black':'white'}} />
      <About mode={mode} />
    </>
  );
}

export default App;

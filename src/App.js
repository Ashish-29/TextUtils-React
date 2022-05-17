import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const toggleMode = () => {
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor = '#383736';
      showAlert("Dark mode has been enabled.","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled.","success");
    }
  }

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{setAlert(null);},1500);
  }

  return (
    < >
      <Navbar title="Text_Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextForm heading='Enter text to analyze below' mode={mode} showAlert={showAlert}/>
      </div>
      <hr style={{color:mode==='light'?'black':'white'}} />
      <About mode={mode} />
    </>
  );
}

export default App;

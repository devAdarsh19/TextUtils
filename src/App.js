import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", 'success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  const randomMode = () => {
    let listOfColors = ['#8b01ef', '#19ff00', '#00ffea', '#0035ff'];
    if (mode === 'light') {
      document.body.style.backgroundColor = listOfColors[Math.floor(Math.random() * 4)];
    }
  }

  return (
    <>
        <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} randomMode={randomMode} />
        <Alert alert={alert}/>
        <div className="container my-5">
            <TextForm heading='Enter text to analyze' mode={mode} showAlert={showAlert}/>
        </div>
    </>
  );
}

export default App;

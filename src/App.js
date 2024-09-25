//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleStyle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#202122';
      showAlert("Dark-mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light-mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleStyle={toggleStyle} />
        <Alert alert={alert} />
        <div className="container my-4">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode} />
          <Routes>
            <Route exact path='/AboutUs' element={<AboutUs mode={mode}></AboutUs>} />
            <Route TextForm showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

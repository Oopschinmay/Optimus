//import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import AboutUs from './components/AboutUs';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactMe from './components/ContactMe';



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
        {/*<Navbar title="TextUtils" mode={mode} toggleStyle={toggleStyle} />*/}
        <Routes>
          <Route exact path='/Home' element={<Navbar title="Textlyzes" mode={mode} toggleStyle={toggleStyle} />} />
          <Route exact path='/AboutUs' element={<Navbar title="Textlyzes" mode={mode} toggleStyle={toggleStyle} />} />
          <Route exact path='/ContactMe' element={<Navbar title="Textlyzes" mode={mode} toggleStyle={toggleStyle} />} />
        </Routes>
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='/ContactMe' element={<ContactMe mode={mode}></ContactMe>} />
            <Route exact path='/AboutUs' element={<AboutUs mode={mode}></AboutUs>} />
            <Route exact path='/Home' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below: " mode={mode}></TextForm>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
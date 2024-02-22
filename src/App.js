import './App.css';
import Textform from './Components/Textform';
import About from './Components/About';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);

    },1500);
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
      document.title='YoYO-Dark Mode'    //to set website heading/title
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Switched to Light Mode","success");
      document.title='YoYO-Light Mode'
    }
  }
  return (
    <>
    <Router>
    
      <Navbar title="YoYO" about="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mb-3">
      <Routes>
      <Route exact path='/about' element={<About/>} />
          
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Text To Analyse" mode={mode}/>}/>
              
          
        </Routes>
        
      </div>
      
    
    </Router>
    </>
  );
}

export default App;

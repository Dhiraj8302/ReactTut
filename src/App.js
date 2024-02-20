import './App.css';
import Textform from './Components/Textform';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Switched to Light Mode","success");
    }
  }
  return (
    <>
      <Navbar title="YoYO" about="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container mb-3">
        <Textform showAlert={showAlert} heading="Enter Text To Analyse" mode={mode}/>
      </div>
    </>
  );
}

export default App;

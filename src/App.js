import './App.css';
import Textform from './Components/Textform';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="YoYO" about="About us" mode={mode} toggleMode={toggleMode}/>
      <div className="container mb-3">
        <Textform heading="Enter Text To Analyse" mode={mode}/>
      </div>
    </>
  );
}

export default App;

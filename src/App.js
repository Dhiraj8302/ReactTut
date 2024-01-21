import './App.css';
import Textform from './Components/Textform';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar title="YoYO" about="About us"/>
      <div className="container mb-3">
        <Textform heading="Enter the text to Analyse"/>
      </div>
    </>
  );
}

export default App;

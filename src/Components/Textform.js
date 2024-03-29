import React, { useState } from 'react'

export default function Textform(props) {
    const handleUPclick=()=>{
        //console.log("Uppercase Clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLOclick=()=>{
        //console.log("Uppercase Clicked");
        let newText1=text.toLowerCase();
        setText(newText1);
        props.showAlert("Converted to Lowercase","success");
    }

    const handleCapitalise = () => {
        const finalSentence = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(finalSentence);
        props.showAlert("Capitalized","success");
    };


    const Clear=()=>{
        
        setText("")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const handleOnChange=(event)=>{
        //console.log("On click");
        setText(event.target.value);
    }
    const [text, setText] = useState('')
  return (
    <>
        <div className="container" style={{color :props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor :props.mode==='dark'?'#161b3b':'white',color :props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-info mx-1 my-1" onClick={handleUPclick}>To UPPERCASE</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleLOclick}>To LOWERCASE</button>
                <button className="btn btn-info mx-1 my-1" onClick={handleCapitalise}>Captalise</button>
                <button className="btn btn-danger mx-1 my-1" onClick={Clear}>Clear</button>
                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
        </div>
        <div className="container my-3" style={{color :props.mode==='dark'?'white':'#042743'}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length * 0.008} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to get preview"}</p>
        </div>
    </>
  )
}

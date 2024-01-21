import React, { useState } from 'react'

export default function Textform(props) {
    const handleUPclick=()=>{
        //console.log("Uppercase Clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLOclick=()=>{
        //console.log("Uppercase Clicked");
        let newText1=text.toLowerCase();
        setText(newText1)
    }
    const handleOnChange=(event)=>{
        //console.log("On click");
        setText(event.target.value);
    }
    const [text, setText] = useState('')
  return (
    <>
        <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUPclick}>To Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLOclick}>To Lowwercase</button>
        </div>
        <div className="container my-3">
                <h2>Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h2>prewiew</h2>
                <p>{text}</p>
        </div>
    </>
  )
}

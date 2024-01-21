import React, { useState } from 'react'

export default function Textform(props) {
    const handleUPclick=()=>{
        //console.log("Uppercase Clicked");
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange=(event)=>{
        //console.log("On click");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text Here')
  return (
        <div>
            <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUPclick}>To Uppercase</button>
        </div>
  )
}

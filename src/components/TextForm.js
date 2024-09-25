import { useState } from "react";
import React from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter Text here');
    const handleUpClick = () => {
        //console.log("Uppercase was clicked!!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!!", "success");
    }
    const handleLoClick = () => {
        //console.log("Uppercase was clicked!!" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!!", "success");
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!!", "success");
    }

    return (
        <>
            <div className="Container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary" onClick={handleCopy}><i class="fa-solid fa-copy"></i></button>
            </div>
            <div className="Container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#202122' }}>
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Words to Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it."}</p>
            </div>
        </>
    );
}

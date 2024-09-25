//import React, { useState } from 'react'

export default function AboutUs(props) {

    /*const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
    });

    const [btnTxt, setBtntxt] = useState("Enable Dark Mode");

    const toggleSet = () => {
        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            });
            setBtntxt("Enable Dark Mode");
        }
        else {
            setMyStyle({
                color: 'white',
                backgroundColor: '#202122'
            });
            setBtntxt("Enable Light Mode");
        }
    }*/

    return (
        <>
            <h1 style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }} >About Us</h1>
            <div className="accordion" id="accordionExample" >
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>UpperCase</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }}  >
                            Uppercase refers to letters that are written in their larger form, as opposed to lowercase, which are smaller. Uppercase letters are commonly used at the beginning of sentences, for proper nouns, and in specific contexts where emphasis is needed, such as acronyms, headings, or certain titles. In typography and text formatting, uppercase letters are also known as capital letters.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }}>
                            <strong>LowerCase</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }} >
                            Lowercase refers to the smaller form of letters in a writing system, as opposed to uppercase (capital) letters. In the English alphabet, for example, "a" is lowercase, while "A" is uppercase. Lowercase letters are typically used for the majority of written text, including regular sentences, while uppercase letters are used for emphasis, proper nouns, the beginning of sentences, and acronyms.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

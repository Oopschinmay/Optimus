import React, { useState } from 'react'

export default function ContactMe(props) {

    const [email, setEmail] = useState('');
    const [txt, setTxt] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        validateForm();
    };

    const handleText = (event) => {
        setTxt(event.target.value);
        validateForm();
    }

    const validateForm = () => {
        if (email.length > 0 && txt.length > 0) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    };


    const handleSubmit = () => {
        const text = document.getElementById("exampleFormControlTextarea1");
        console.log(text.value);
        let newTxt = '';
        setTxt(newTxt);
        showAlert("Copied to clipboard!!", "success");
    }
    return (
        <>
            <div>
                <h1 className='mb-3' style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }}>Contact Us</h1>
                <div className="mb-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" value={email} onChange={handleEmailChange} placeholder="name@example.com" />
                </div>
                <div className="mb-3" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#202122', color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Issue or FeedBack</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" value={txt} onChange={handleText} rows="3"></textarea>
                </div>
                <button onClick={handleSubmit} disabled={isButtonDisabled} >Submit</button>
            </div>
        </>
    )
}

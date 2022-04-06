import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = ()=>{
        setText(text.toLowerCase());
    }
    const handleclearclick = ()=>{
        setText('');
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
        <div className="mb-3 my-3">
            <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="5"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUPclick} >Convert to UPPERCASE</button>
        <button className="btn btn-success mx-1" onClick={handleLoclick} >Convert to lowercase</button>
        <button className="btn btn-success mx-1" onClick={handleclearclick} >Clear</button>
        
        <div className="container my-5">
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>Approx {0.008 * text.split(" ").length} minutes read.</p>
        
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}

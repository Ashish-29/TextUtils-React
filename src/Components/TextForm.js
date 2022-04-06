import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = ()=> {
        setText(text.toLowerCase());
    }
    const handleclearclick = ()=> {
        setText('');
    }
    const handlecopy = ()=> {
        let newText= document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }
    const handlExtraSpaces = ()=> {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
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
        <button className="btn btn-success mx-1 my-1" onClick={handleUPclick} >UPPERCASE</button>
        <button className="btn btn-success mx-1 my-1" onClick={handleLoclick} >lowercase</button>
        <button className="btn btn-success mx-1 my-1" onClick={handleclearclick} >Clear</button>
        <button className="btn btn-success mx-1 my-1" onClick={handlecopy} >Copy</button>
        <button className="btn btn-success mx-1 my-1" onClick={handlExtraSpaces} >Remove Extra Spaces</button>
        
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
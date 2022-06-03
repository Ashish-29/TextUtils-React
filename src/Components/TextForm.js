import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUPclick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase.","success");
    }
    const handleLoclick = ()=> {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase.","success");
    }
    const handleclearclick = ()=> {
        setText('');
        props.showAlert("Text Cleared.","success");
    }
    const handlecopy = ()=> {
        let newText= document.getElementById("mybox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to clipboard.","success");
    }
    const handlExtraSpaces = ()=> {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed.","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <div className="container">
        <div className="mb-3 my-3" style={{color: props.mode==='light'?'black':'white'}}>
            <label htmlFor="mybox" className="form-label"><h1>{props.heading}</h1></label>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{color: props.mode==='light'?'black':'white', backgroundColor : props.mode==='dark'?'#445e54':'white'}} id="mybox" rows="5"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUPclick} >UPPERCASE</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoclick} >lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleclearclick} >Clear</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlecopy} >Copy</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handlExtraSpaces} >Remove Extra Spaces</button>
        
        <div className="container my-5" style={{color: props.mode==='light'?'black':'white'}}>
            <h3>Your text summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>Approx {0.008 * text.split(" ").length} minutes read.</p>
        
            <h3>Preview</h3>
            <p>{text.length>0?text:'Enter something in the textbox above to preview it here.'}</p>
        </div>
        </div>
    )
}
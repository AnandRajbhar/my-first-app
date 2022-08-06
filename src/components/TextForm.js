import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to UpperCase", "success");
  };
  const handleLoClick = () => {
    //console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "success");
  };
  const handleClear = () => {
    //console.log("LowerCase was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove Extra Space", "success");

  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Text", "success");
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
    
  return (
    <>
     
      <div className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control"
            value={text}
            style={{ background: props.mode==='dark'? 'rgb(35 54 70)':'white',color: props.mode==='dark'? 'white':'black'}}
            onChange={handleOnChange}
            id="mybox"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-3 " onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-3 " onClick={handleClear}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-3 " onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary " onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container mb-3" style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>
          
           <spam>{text.trim().split("-").length} words and {text.length} characters</spam> 
          {/*({  text.trim().split.word('').length } words and {text.length} characters)*/}
        </p>
        <p >{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to Preview"}</p>
      </div>
    
      <div className={`form-check form-switch my-1 text-${props.mode==='light'? 'dark':'light'}`}>
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark   Mode</label>
             </div> 
             {/* {alert("heelo")}  */}
  </>
  );
}

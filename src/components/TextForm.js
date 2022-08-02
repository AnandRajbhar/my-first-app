import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");

  const handleUpClick = () => {
    //console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    //console.log("LowerCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    //console.log("LowerCase was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
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
          Remove Space
        </button>
        <button className="btn btn-primary " onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container mb-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

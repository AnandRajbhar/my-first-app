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
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to LowerCase", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear Text", "success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove Extra Space", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copy Text", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container"
        background-size="100%"
        style={{
          color: props.mode === "info" ? "white" : "black",
          background: props.mode === "info" ? "rgb(35 54 70)" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              background: props.mode === "info" ? "rgb(35 54 70)" : "white",
              color: props.mode === "info" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="6"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1 "
          onClick={handleCopy}
        >
          Copy Text
        </button>
      </div>

      <div
        className="container mb-3"
        style={{
          color: props.mode === "info" ? "white" : "black",
          background: props.mode === "info" ? "rgb(35 54 70)" : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters.
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to Preview"}</p>
      </div>
    </>
  );
}

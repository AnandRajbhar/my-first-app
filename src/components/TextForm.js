import React, { useState , useEffect} from "react";
import {
  Form,
  TextArea,
  Button,
  Icon
} from 'semantic-ui-react';
import axios from 'axios';

export default function TextForm(props) {

  const [inputText, setInputText] = useState('');
    const [detectLanguageKey, setdetectedLanguageKey] = useState('');
    const [selectedLanguageKey, setLanguageKey] = useState('')
    const [languagesList, setLanguagesList] = useState([])
    const [resultText, setResultText] = useState('');
    const getLanguageSource = () => {
        axios.post(`https://libretranslate.de/detect`, {
            q: inputText
        })
            .then((response) => {
                setdetectedLanguageKey(response.data[0].language)
            })
    }
    useEffect(() => {
        axios.get(`https://libretranslate.de/languages`)
            .then((response) => {
                setLanguagesList(response.data)
            })
    }, [])

    const languageKey = (selectedLanguage) => {
        setLanguageKey(selectedLanguage.target.value)
    }

    const translateText = () => {
        getLanguageSource();

        let data = {
            q : inputText,
            source: detectLanguageKey,
            target: selectedLanguageKey
        }
        axios.post(`https://libretranslate.de/translate`, data)
        .then((response) => {
            setResultText(response.data.translatedText)
        })
    }
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
          <Form>
          <div className="text-center" >
          <div className="my-2">
          <Form.Field                   
            control={TextArea}
            placeholder='Type Text to Translate..'
           onChange={(e) => setInputText(e.target.value)}
            style={{
              background: props.mode === "info" ? "rgb(35 54 70)" : "white",
              color: props.mode === "info" ? "white" : "black",
              width:"100%", height:"auto"
            }}
            // onChange={handleOnChange}
            id="mybox"
            rows="6"
          ></Form.Field></div>

<div className="my-2">
          <select className="language-select" onChange={languageKey}>
                            <option>Please Select Language..</option>
                            {languagesList.map((language) => {
                                return (
                                    <option value={language.code}>
                                        {language.name}
                                    </option>
                                )
                            })}
                            
                        </select>
</div>
<div className="my-2">
          <Form.Field
            control={TextArea}
            placeholder='Your Result Translation..'
            value={resultText}
            style={{
              background: props.mode === "info" ? "rgb(35 54 70)" : "white",
              color: props.mode === "info" ? "white" : "black",
              width:"100%", height:"auto"
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="6"
          ></Form.Field>
</div>
           <Button
                            color="orange"
                            size="large"
                            onClick={translateText}
                        >
                            <Icon name='translate' />
                            Translate</Button>
</div>
          </Form>
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

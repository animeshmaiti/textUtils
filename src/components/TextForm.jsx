import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Write here");
  const handleUpClick = () => {
    console.log("clicked upper case");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("typing...");
    setText(event.target.value);
  };
  const readTime =(count)=>{
    let time = count*0.25;
    if (time<1) {
        return `less than 1 second ${time}sec`
    } else if (time>=60) {
        return `${time/60} minutes ${time} seconds`;
    } else{
        return `${time} seconds `;
    }
  }
  // setText("new text")
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="my-text"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
      </div>
      <div className="container my-3">
        <h3>Preview</h3>
        <p>{text}</p>
        <h3>Text Summary</h3>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>Approximate reading time {readTime(text.split(" ").length)} </p>
      </div>
    </>
  );
}

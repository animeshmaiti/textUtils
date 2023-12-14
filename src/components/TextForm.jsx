import React, { useState } from "react";

export default function TextForm(props) {
  const [text, inputText] = useState({
    inText: "Write text",
    outText: " ",
  });
  const handleOnChange = (event) => {
    console.log("typing...");
    inputText({ ...text, inText: event.target.value, outText: "" });
  };
  const readTime = (count) => {
    let time = count * 0.25;
    if (time < 1) {
      return `less than 1 second ${time}sec`;
    } else if (time >= 60) {
      return `${time / 60} minutes ${time} seconds`;
    } else {
      return `${time} seconds `;
    }
  };

  const wordCount = () => {
    if (text.inText.length === 0) {
      return 0;
    } else {
      return text.inText.split(" ").length;
    }
  };

  const handleUpClick = () => {
    console.log("clicked upper case");
    let newText = text.inText.toUpperCase();
    inputText({ ...text, outText: newText });
  };
  const handleLoClick = () => {
    let newText = text.inText.toLocaleLowerCase();
    inputText({ ...text, outText: newText });
  };
  const handleClearText = () => {
    inputText({ ...text, inText: "", outText: "" });
    console.log("text cleared");
  };
  const handleExtractEmail = () => {
    const reg = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const matches = text.inText.match(reg);
    if (matches) {
      const emails = matches.join(",\n");
      console.log("email extracted");
      inputText({ ...text, outText: emails });
    } else {
      inputText({ ...text, outText: "Email not found" });
    }
  };
  return (
    <>
      <div style={props.myTheme}>
        <div className="container pt-3" >
          <h2>{props.heading}</h2>
          <div className="mb-3">
            <textarea
              style={props.myTheme}
              className="form-control"
              id="my-text"
              rows="8"
              value={text.inText}
              onChange={handleOnChange}
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert To Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert To LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtractEmail}>
            Extract Email
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearText}>
            Clear
          </button>
        </div>
        <div className="container pt-3">
          <h3>Preview</h3>
          <p>{text.inText}</p>
          <h3>Outputs</h3>
          <p>{text.outText}</p>
          <h3>Text Summary</h3>
          <p>
            {wordCount()} Words and {text.length} characters
          </p>
          <p>
            Approximate reading time {readTime(text.inText.split(" ").length)}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

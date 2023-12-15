import React, { useState } from "react";

export default function TextForm(props) {
  let margin={
    marginBottom: '0px',
    paddingBottom: '16px',
  }
  const [text, setText] = useState({
    inText: "Write text",
    outText: "Write text",
  });
  const handleOnChange = (event) => {
    console.log("typing...");
    setText({ ...text, inText: event.target.value, outText: "" });
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
    setText({ ...text, outText: newText });
  };
  const handleLoClick = () => {
    let newText = text.inText.toLocaleLowerCase();
    setText({ ...text, outText: newText });
  };
  const handleClearText = () => {
    setText({ ...text, inText: "", outText: "" });
    console.log("text cleared");
  };
  const handleExtractEmail = () => {
    const reg = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    const matches = text.inText.match(reg);
    if (matches) {
      const emails = matches.join(",\n");
      console.log("email extracted");
      setText({ ...text, outText: emails });
    } else {
      setText({ ...text, outText: "Email not found" });
    }
  };
  const handleCopyText=()=>{
    navigator.clipboard.writeText(text.outText);
  }
  const handleExtraSpace=()=>{
    let newText=text.inText.split(/[ ]+/);
    setText({...text,inText:newText.join(" "),outText:newText.join(" ")});
  }
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
          <button className="btn btn-primary mx-2" onClick={handleCopyText}>
            Copy Output
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
            Remove Extra Spaces
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
          <p style={margin}>
            Approximate reading time {readTime(text.inText.split(" ").length)}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

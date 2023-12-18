import React from "react";

export default function About(props) {
  return (
    <div style={props.myTheme}>
      <div className="container">
        <h1>About</h1>
        <p>
          This website is created using react-js this is a very functional text
          utility web page that help us to do many operations on text.
        </p>
        <h1>Features</h1>
        <ul>
          <li>Capitalize all alphabets</li>
          <li>Lowercase</li>
          <li>Extract email from text</li>
          <li>Count words</li>
          <li>Approximate read time</li>
          <li>Remove extra spaces</li>
          <li>Copy output to clipboard</li>
          <li>With different theme dark and light mode</li>
        </ul>
        <h1>Note:</h1>
        <p>
          All changes after perform any operations on text are not show in input section
          it is in your output section i have done this because i don't want to change the original text
          except: remove extra spaces
        </p>
      </div>
    </div>
  );
}

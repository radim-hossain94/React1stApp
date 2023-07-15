import { useState } from "react";


const Content = () => {
  const [displayText, setDisplayText] = useState("");

  const handleButtonClick = () => {
    const textAreaValue = document.getElementById("textArea").value;
    setDisplayText(textAreaValue);
  };

  return (
    <div>
      
      <div className="input-group">
        <span className="input-group-text">Textarea</span>
        <textarea
          className="form-control"
          id="textArea"
          aria-label="With textarea"
        ></textarea>
      </div>
      <br />
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Display Text
      </button>
      <br />
      <br />
      <p>
        <b>Display My Text:</b> {displayText && displayText}
      </p>
      <br />
    </div>
  );
};

export default Content
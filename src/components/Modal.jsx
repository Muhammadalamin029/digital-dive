import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
import { FaX } from "react-icons/fa6";
import { ClipLoader } from "react-spinners";

const Modal = ({ setModal }) => {
  const [inputPrompt, setInputPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState();
  const [loading, setloading] = useState(false);
  const [copy, setCopy] = useState(false);
  const [generated, setGenerated] = useState(true);

  const handleInputChange = (event) => {
    setInputPrompt(event.target.value);
  };

  // Generates the AI response

  const getAiContent = async (input) => {
    if (input === "") {
      alert("input empty");
      return;
    } else {
      try {
        setloading(true);
        const genAI = new GoogleGenerativeAI(
          "AIzaSyBlUYrXMebfPwrOkUQW_fcZHUNmjMTXKbM"
        );
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Give a more information about ${input}`;

        const result = await model.generateContent(prompt);
        setAiResponse(result.response.text());
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
        setGenerated(false);
        setCopy(false);
      }
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(aiResponse);
    setCopy(true);
  };

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <FaX className="X" onClick={() => setModal(false)} />
        <h2>Generate more info on your content using DDAI</h2>
        <div className="input-field">
          <input onChange={handleInputChange} type="text" />
          <br />
          <Link className="btn" onClick={() => getAiContent(inputPrompt)}>
            GENERATE
          </Link>
        </div>

        <div className="res">
          {loading ? (
            <ClipLoader
              size={100}
              height="80"
              width="80"
              color="#ffffff"
              ariaLabel="loading"
            />
          ) : (
            <div className={generated ? "" : "response-div"}>
              <Markdown>{aiResponse}</Markdown>
              {generated ? (
                ""
              ) : (
                <Link onClick={copyToClipboard} className="btn">
                  {copy ? "Copied" : "Copy"}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;

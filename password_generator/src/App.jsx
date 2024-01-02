import React from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import clipboardCopy from "clipboard-copy";
import { useState } from "react";
import { COPY_SUCCESS } from "./message";
import {
  numbers1,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from "./character";

const App = () => {
  const [password, setpassword] = useState("");
  const [passwordlength, setpasswordlength] = useState(20);
  const [uppercase, setuppercase] = useState(false);
  const [lowercase, setlowercase] = useState(false);
  const [numbers, setnumbers] = useState(false);
  const [symbols, setsymbols] = useState(false);

  const handleGeneratePassword = () => {
    if (!uppercase && !lowercase && !numbers && !symbols) {
      toast.error("You must Select atleast one option", {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    let characterList = "";
    if (uppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (lowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (numbers) {
      characterList = characterList + numbers1;
    }

    if (symbols) {
      characterList = characterList + specialCharacters;
    }

    setpassword(createPassword(characterList));
  };
  const createPassword = (characterList) => {
    let password = "";

    const characterListLength = characterList.length;

    for (let i = 0; i < passwordlength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);

      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  const handleCoppy = () => {
    if(password==''){
      toast.warning("Nothing to copy", {
        position: toast.POSITION.TOP_CENTER,
      });
      return
    }

    clipboardCopy(password);
    toast.success(COPY_SUCCESS, {
      
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="password-generator">
          <h2 className="generator__header">Password generator</h2>

          <div className="generator__password">
            <h3>{password}</h3>
            <button onClick={handleCoppy} className="copy__btn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input
              defaultValue={passwordlength}
              onChange={(e) => {
                setpasswordlength(e.target.value), console.log(passwordlength);
              }}
              type="number"
              id="password-strength"
              name="password-strength"
              max="20"
              min="10"
            />
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Uppercase Letters</label>
            <input
              checked={uppercase}
              onChange={(e) => setuppercase(e.target.checked)}
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Lowercase Letters</label>
            <input
              checked={lowercase}
              onChange={(e) => setlowercase(e.target.checked)}
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Numbers</label>
            <input
              checked={numbers}
              onChange={(e) => setnumbers(e.target.checked)}
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Symbols</label>
            <input
              checked={symbols}
              onChange={(e) => setsymbols(e.target.checked)}
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            ></input>
          </div>

          <button onClick={handleGeneratePassword} className="generator__btn">
            Generate Password
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <ToastContainer />
    </div>
  );
};

export default App;

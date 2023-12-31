import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="password-generator">
          <h2 className="generator__header">Password generator</h2>

          <div className="generator__password">
            <h3>Password</h3>
            <button className="copy__btn">
              <i className="far fa-clipboard"></i>
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="password-strength">Password length</label>
            <input
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
              type="checkbox"
              id="uppercase-letters"
              name="uppercase-letters"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Lowercase Letters</label>
            <input
              type="checkbox"
              id="lowercase-letters"
              name="lowercase-letters"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Numbers</label>
            <input
              type="checkbox"
              id="include-numbers"
              name="include-numbers"
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="uppercase-letters">Include Symbols</label>
            <input
              type="checkbox"
              id="include-symbols"
              name="include-symbols"
            ></input>
          </div>

          <button className="generator__btn">Generate Password</button>
        </div>
      </div>
    </div>
  );
};

export default App;

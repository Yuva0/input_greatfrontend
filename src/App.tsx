import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";

import {
  faCircleQuestion,
  faEnvelope,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="app">
      <div className="input-group">
        <Input
          label="Email"
          helperText="This is a hint text"
          placeholder="name@example.com"
          trailingIcon={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
        <Input
          label="Email"
          helperText="This is a hint text"
          placeholder="name@example.com"
          leadingIcon={<FontAwesomeIcon icon={faEnvelope} />}
          trailingIcon={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
        <Input
          label="Email"
          helperText="This is a hint text"
          placeholder="name@example.com"
          trailingIcon={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
        <Input
          label="Email"
          hasError
          errorText="This is an error message."
          placeholder="name@example.com"
          trailingIcon={<FontAwesomeIcon icon={faCircleQuestion} />}
        />
      </div>
      <div className="credits">
        A challenge by
        <a
          href="https://www.greatfrontend.com/projects?ref=challenges"
          target="_blank"
          rel="noreferrer"
        >
          GreatFrontEnd Projects
        </a>
        . Built by
        <a
          href="https://www.greatfrontend.com/projects/u/yuva0"
          target="_blank"
          rel="noreferrer"
        >
          Tanuj Sengupta
        </a>
        .
      </div>
    </div>
  );
}

export default App;

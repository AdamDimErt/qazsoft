/** @format */

import React from "react";
import { Login } from "../components/Login/Login";
import Code from "../components/Code/Code";
import './codeEditor.scss'
import ViewWindow from "../components/ViewWindow/ViewWindow";

type Props = {};

const CodeEditor = (props: Props) => {
  return (
    <div className="codeEditor">
      <Code/>
      <ViewWindow/>
    </div>
  );
};

export default CodeEditor;

/** @format */

import React from "react";
import { Login } from "../components/Login/Login";
import Code from "../components/Code/Code";
import "./codeEditor.scss";
import ViewWindow from "../components/ViewWindow/ViewWindow";
import { useAppSelector } from "app/hooks";

type Props = {};

const CodeEditor = (props: Props) => {
  const data = useAppSelector((state) => state.inputSlice);
  console.log(data);

  return (
    <div className='codeEditor'>
      <Code />
      <ViewWindow />
    </div>
  );
};

export default CodeEditor;

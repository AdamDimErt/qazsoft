/** @format */

import React from "react";
import { Login } from "../components/Login/Login";
import Code from "../components/Code/Code";
import "./codeEditor.scss";
import ViewWindow from "../components/ViewWindow/ViewWindow";
import { useAppSelector } from "app/hooks";
import { Options } from "../components/Options/Options";

type Props = {
  type?: string;
};

const CodeEditor = ({ type }: Props) => {
  return (
    <div className='codeEditor'>
      <Code />
      <ViewWindow type={type}/>
      <div className='wrapperEditor'>
        <Options />
        <div className='codeEmpty'></div>
      </div>
    </div>
  );
};

export default CodeEditor;

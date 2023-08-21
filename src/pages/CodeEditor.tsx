/** @format */

import React from "react";
import { Login } from "../components/Login/Login";
import Code from "../components/Code/Code";
import "./codeEditor.scss";
import ViewWindow from "../components/ViewWindow/ViewWindow";
import { useAppSelector } from "app/hooks";
import { Options } from "../components/Options/Options";
import { Layout } from "../components/layout/Layout";
import { Header } from "../components/Header/Header";

type Props = {};

const CodeEditor = (props: Props) => {
  const data = useAppSelector((state) => state.inputSlice);
  console.log(data);

  return (
    <Layout>
      <Header/>
      <h1 className="codeEditor__title" >История Платежей</h1>
      <section className="codeEditor">
        <Code />
        <ViewWindow />
        <div className="wrapperEditor">
        <Options />
        <div className="codeEmpty"></div>
        </div>
      </section>
      </Layout>
  );
};

export default CodeEditor;

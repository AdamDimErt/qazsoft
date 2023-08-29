/** @format */

import { Layout } from "layout/Layout";
import CodeEditor from "../pages/CodeEditor";
import React from "react";

type Props = {
  type?:string
};

export const Home = ({type}: Props) => {
  return (
    <Layout>
      <CodeEditor type={type} />
    </Layout>
  );
};

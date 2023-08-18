import React from "react";

import { Paths } from "../../Paths";
import { Layout as AntLayout } from "antd";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <AntLayout.Content>{children}</AntLayout.Content>
    </>
  );
};

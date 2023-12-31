/** @format */

import { loginComponentCodeJS } from "configCode/Login/LoginCodeJS";
import "./code.scss";

import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { loginComponentCodeTS } from "../../configCode/Login/LoginCodeTs";
SyntaxHighlighter.registerLanguage("jsx", jsx);
type Props = {};

// const renderCode = () => {
//   if (type === "login") {
//     return <Login />;
//   } else if (type === "register") {
//     return <Register />;
//   } else if (type === "history") {
//     return <History />;
//   }
// };

const Code = (props: Props) => {
  return (
    <div className='code'>
      <div className='code-header'>
        <h3>Editor</h3>
      </div>
      <div className='code-block'>
        <SyntaxHighlighter
          customStyle={{ marginBottom: "30px" }}
          className='code-code'
          language='jsx'
          style={oneDark}
        >
          {loginComponentCodeTS}
        </SyntaxHighlighter>
      </div>
      <div className='code-footer'>
        <ul className='code-footer__list'>
          <li>React JavaScript</li>
          <li>Type Script</li>
          <li>Scss</li>
        </ul>
      </div>
    </div>
  );
};

export default Code;

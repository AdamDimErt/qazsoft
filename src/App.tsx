/** @format */

import "./App.css";
import CodeEditor from "./pages/CodeEditor";
import { NavBar } from "./components/NavBar/NavBar";
import { Options } from "./components/Options/Options";
import { PersonalAccount } from "./components/personalAccount/PersonalAccount";
import Code from "@components/Code/Code";

function App() {
  return (
    <div className='App'>
      <CodeEditor />
      <Options />
    </div>
  );
}

export default App;

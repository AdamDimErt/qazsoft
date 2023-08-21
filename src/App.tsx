/** @format */

import "./App.css";
import CodeEditor from "./pages/CodeEditor";
import { NavBar } from "./components/NavBar/NavBar";
import { Options } from "./components/Options/Options";
import { PersonalAccount } from "./components/personalAccount/PersonalAccount";
import { Header } from "./components/Header/Header";
import Code from "@components/Code/Code";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
      {/* <CodeEditor /> */}
      </main>

    </div>
  );
}

export default App;

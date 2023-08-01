import { loginComponentCode } from 'configCode/LoginCodeJS';
import './code.scss'

import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism';
SyntaxHighlighter.registerLanguage('jsx', jsx);
type Props = {}

const Code = (props: Props) => {
  return (
    <div className='code'>
        <div className="code-header"><p>Editor</p></div>
        <div className="code-block">
            <SyntaxHighlighter customStyle={{ marginBottom: "30px" }} className="code-code" language="jsx" style={oneDark}>
                {loginComponentCode}
            </SyntaxHighlighter>
        </div>
        <div className="code-footer">
            <ul className='code-footer__list'>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Code
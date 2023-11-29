import { useState } from "react";
import Markdown from 'react-markdown';

function App() {
  
  const defaultText = `
# Welcome to my React Markdown Previewer!

## Feel free to test it

Heres a [Link](https://www.example.com)

\`Inline Code\`

\`\`\`javascript
// Code Block
function example() {
  console.log("Hello, World!");
}
\`\`\`

- List Item 1
- List Item 2
- List Item 3

> Blockquote

![Image](https://www.example.com/image.jpg)

**Bold Text**`;
  
  const [markdownText, setMarkdownText] = useState(defaultText);
  const [isEditMaximized, setIsEditMaximized] = useState(false);
  const [isPrevMaximized, setIsPrevMaximized] = useState(false);
  

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
  };
  
  const handleEditMax = () => {
    setIsEditMaximized(!isEditMaximized);
  }
  
  const handlePrevMax = () => {
    setIsPrevMaximized(!isPrevMaximized);
  }

  return (
    <div className="App">
      <div className={`editorSection ${isPrevMaximized ? "hide" : ""}`}>
        <div className="editorToolBar">
          <h2>Editor</h2>
          <i onClick={handleEditMax} className={`${isEditMaximized ? 'fa fa-compress' : 'fa fa-arrows-alt'}`} aria-hidden="true"></i>
        </div>
        <div id="text">
            <textarea
              autoFocus
              id="editor"
              value={markdownText}
              className={`${isEditMaximized ? "maximized--textarea" : ""}`}
              onChange={handleInputChange}
            ></textarea>
          </div>
      </div>
      <div className={`prevSection ${isEditMaximized ? 'hide' : ''}`}>
        <div className="prevToolBar">
          <h2>Previewer</h2>
          <i onClick={handlePrevMax} className={`${isPrevMaximized ? 'fa fa-compress' : 'fa fa-arrows-alt'}`} aria-hidden="true"></i>
        </div>
        <Markdown className={`preview ${isPrevMaximized ? 'maximized' : ''}`}>{markdownText}</Markdown>
      </div>
    </div>
  );
}

export default App;

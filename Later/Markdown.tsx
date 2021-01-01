import React from "react";
import logo from "./logo.svg";
import "./css/Markdown.css";
import marked from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: placeholder,
      text: "",
    };
  }
  handleKeyPress = () => {
    this.setState(() => {
      return {
        text: marked(document.getElementById("editor").value),
      };
    });
  };

  componentDidMount() {
    marked.setOptions({
      breaks: true,
    });
    this.handleKeyPress();
  }
  changeLineBreaks = (src) => {
    // Create reference instance
    const marked = require("marked");

    const tokenizer = {
      codespan(src) {
        const match = src.match(/\n/);
        if (match) {
          console.log(match);
        }

        // return false to use original codespan tokenizer
        return false;
      },
    };

    //marked.use({ tokenizer });

    // Run marked
    //console.log(marked('$ latex code $\n\n` other code `'));
  };
  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div id="group">
          <div id="markdown-editor">
            <textarea
              id="editor"
              onChange={this.handleKeyPress}
              defaultValue={this.state.default}
            ></textarea>
          </div>
          <div id="markdown-preview">
            <div
              id="preview"
              dangerouslySetInnerHTML={{ __html: marked(this.state.text) }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
export default App;

import React from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { marked } from 'marked';
import './App.scss'

class  App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // input with a default text
      input: `# Welcome to my React Markdown Previewer! \n## This is a sub-heading... \n### And here's some other cool stuff: \n [I'm an inline-style link](https://www.google.com) \n\`\` this is inline code. \`\` \n\`\`\` javascript \n var s = "JavaScript syntax highlighting"; \n alert(s); \n \`\`\`\n - This \n - is \n - an \n - example \n - of \n - list \n - items \n > This is an example of block quote \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n **This is an example of Bolded Text** \n <dl> <dt>Definition list</dt> <dd>Is something people use sometimes.</dd> <dt>Markdown in HTML</dt> <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd> </dl> `,
      isResized: false
    }

    this.setEditorInput = this.setEditorInput.bind(this);
    this.markedHtml = this.markedHtml.bind(this);
    this.resize = this.resize.bind(this);
  }

  setEditorInput(event) {
    this.setState({
      input: event.target.value
    })
  }

  markedHtml(input) {
    return(
      marked.parse(input)
    )    
  }

  // resize the height of the editor
  resize() {
    this.setState( (state) =>{
      return{isResized: !state.isResized}
    }
    );
  }

  render() {
    return (
      <div className='main-container'>
        <Editor
          onChangeInput={this.setEditorInput}
          valueInput={this.state.input}
          resize={this.resize}
          isResized={this.state.isResized}
        />
        <Preview editorValue={this.markedHtml(this.state.input)}/>
      </div>
    );
  }
}

export default App;

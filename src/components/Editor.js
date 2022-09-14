import { Component } from "react";

const resizedStyle = { height: '90vh' }

export default class Editor extends Component {
    render() {
        return (
            <div className="editor-component">
                <div className="header">
                    <i 
                        class="fa fa-arrows-alt icon-editor"
                        onClick={this.props.resize}
                    ></i>
                    <h1 className="h1-header">Editor</h1>
                </div>
                {(this.props.isResized) ? <textarea
                    id="editor"
                    onChange={this.props.onChangeInput}
                    style={resizedStyle}
                >{this.props.valueInput}
                </textarea>
                    : <textarea
                        id="editor"
                        onChange={this.props.onChangeInput}
                    >{this.props.valueInput}
                    </textarea>
                }
            </div>
        );
    }
}
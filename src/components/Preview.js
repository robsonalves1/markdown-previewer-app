import { Component } from "react";

export default class Preview extends Component {
    
    render() {
        return(
            <div 
                className="preview-component">
                <div className="header">
                    <h1 className="h1-header">Preview</h1>
                </div>
                <div 
                    id="preview" 
                    dangerouslySetInnerHTML={{__html: this.props.editorValue}}
                />
            </div>
        );
    }
}
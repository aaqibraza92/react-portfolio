import React, { useState,useEffect ,useRef} from "react";
import { EditorState,ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WysiwygEditor = (props) => {
  const {dataState}=props;
  console.log("setData123",dataState);
  let _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw);
  console.log("contentState",contentState.blocks[0].text);
  //for callback use "callback"
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [inserted, setinserted] = useState(false);
  const editor = useRef(null)

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

  const config1 = {
    readonly: false   // all options from https://xdsoft.net/jodit/doc/
                }


    
  const handleSubmitOnClick = () => {
    props.callback(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    if (draftToHtml(convertToRaw(editorState.getCurrentContent()))) {
      setinserted(true);
    }
  };

  const content = {
    entityMap: {},
    blocks: [
      {
        key: "637gr",
        text: "Initialized from content state.",
        type: "unstyled",
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
  }
  

  return (
    <>
      <style jsx="true">
        {`
          .public-DraftStyleDefault-block {
            height: 100px;
            border: 1px solid #ddd;
            padding: 10px 14px;
          }
        `}
      </style>
      <div className="editor">
       {/* {editorState && editorState} */}
        {/* <Editor
        //contentState && contentState.blocks[0].text
          initialContentState={props.dataState.description}
          editorState={props.dataState.description}
          //editorState="lorem ipsum"
          name="description"
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          value={props.dataState.description}
          onEditorStateChange={(e) => {props.handleInputChange(e)}}
        /> */}

          <JoditEditor
            	ref={editor}
                value={props.dataState.description}
                config={config1}
	         	onBlur={dataState => props.setDataState(dataState)} // preferred to use only this option to update the content for performance reasons
                onChange={(e) => {props.setDataState(e)}}
            />
       
        <div className="d-flex align-items-center">
          {/* <button
            className="buttonType"
            onClick={handleSubmit(handleSubmitOnClick)}
          >
            Insert
          </button> */}
          {inserted && <p className="ml10 mb0">Inserted!</p>}
        </div>
      </div>
    </>
  );
};

export default WysiwygEditor;

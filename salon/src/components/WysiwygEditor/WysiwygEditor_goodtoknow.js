import React, { useState } from "react";
import { EditorState,ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import { useForm } from "react-hook-form";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WysiwygEditor = (props) => {
  const {setData}=props;
  console.log("setData",setData);
  let _contentState = ContentState.createFromText('Sample content state');
  const raw = convertToRaw(_contentState)
  const [contentState, setContentState] = useState(raw);
  console.log("contentState",contentState.blocks[0].text);
  //for callback use "callback"
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [inserted, setinserted] = useState(false);
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const { handleSubmit } = useForm({
    mode: "onChange",
  });

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
        <Editor
        //contentState && contentState.blocks[0].text
        initialContentState={content}
          editorState={editorState}
          //editorState="lorem ipsum"
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
      
          value={props.dataState.goodToKnow}
          onEditorStateChange={(e) => {onEditorStateChange(e)}}
          
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

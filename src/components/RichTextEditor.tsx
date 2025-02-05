import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <div style={{ borderRadius: "15px", border: "1px solid #ccc" }}>
      <ReactQuill theme="snow" value={content} onChange={setContent} />
    </div>
  );
};

export default RichTextEditor;

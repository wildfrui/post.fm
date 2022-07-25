import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";

export const Editor: React.FC = () => {
  useEffect(() => {
    const editor = new EditorJS({
      holder: "editorjs",
      placeholder: "Напишите текст",
    });
    console.log(editor);
    return () => {
      editor.isReady.then(() => {
        editor.clear();
      });
    };
  }, []);
  return <div id="editorjs"></div>;
};

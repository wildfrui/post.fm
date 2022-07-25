import TextField from "@mui/material/TextField";
import { useState } from "react";
import dynamic from "next/dynamic";
import styles from "./PostForm.module.css";

// const Editor = dynamic<{
//   children?: any;
// }>(() => import("./Editor").then((m) => m.Editor), {
//   ssr: false,
// });

interface PostFormProps {
  name?: string;
}

export const PostForm: React.FC<PostFormProps> = ({ name }) => {
  const [text, setText] = useState("");
  return (
    <div className={styles.post__form}>
      <TextField
        className={styles.post__header}
        placeholder={name ? name : "Create a post"}
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></TextField>
    </div>
  );
};

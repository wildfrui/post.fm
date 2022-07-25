import { useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
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
      <div className={styles.post__flexbox}>
        <h2 className={styles.post__title}>
          Create a <span>post</span>{" "}
        </h2>
        <Input
          classes={{ root: styles.post__header }}
          placeholder={name ? name : "Title"}
          onChange={(e) => setText(e.target.value)}
          value={text}
          fullWidth
        ></Input>
        <Input
          classes={{
            root: styles.post__text,
            focused: styles.post_focused,
          }}
          placeholder={name ? name : "Type something..."}
          fullWidth
          multiline
        ></Input>
        <Button classes={{ root: styles.post__button }}>Publish</Button>
      </div>
    </div>
  );
};

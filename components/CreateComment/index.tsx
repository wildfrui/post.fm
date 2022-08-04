import React, { useRef, useState } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import styles from "./CreateComment.module.css";

const CreateComment = () => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className={styles.createcomment__container}>
      <Input
        classes={{ root: styles.createcomment__root }}
        fullWidth
        multiline
        placeholder="Оставить комментарий..."
        minRows={focused ? 3 : 1}
        onFocus={() => setFocused(true)}
        onChange={(e) => setText(e.target.value)}
      ></Input>
      <div className={styles.createcomment__panel}>
        {focused && (
          <Button
            classes={{
              root: styles.createcomment__button,
              disabled: styles.createcomment__button_disabled,
            }}
            disabled={text ? false : true}
          >
            Опубликовать
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateComment;

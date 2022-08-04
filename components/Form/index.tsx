import { useState, useRef, useEffect } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import dynamic from "next/dynamic";
import styles from "./Form.module.css";

// const Editor = dynamic<{
//   children?: any;
// }>(() => import("./Editor").then((m) => m.Editor), {
//   ssr: false,
// });

interface FormProps {
  title: string;
  titlePlaceholder?: string;
  textPlaceholder?: string;
  buttonText: string;
  focusOn?: boolean;
}

export const Form: React.FC<FormProps> = ({
  title,
  titlePlaceholder,
  textPlaceholder,
  buttonText,
  focusOn,
}) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (focusOn && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <div className={styles.form__container}>
      <div className={styles.form__flexbox}>
        <h2 className={styles.form__title}>{title}</h2>
        <Input
          classes={{ root: styles.form__header }}
          placeholder={titlePlaceholder ? titlePlaceholder : "Title"}
          onChange={(e) => setText(e.target.value)}
          value={text}
          fullWidth
          inputRef={inputRef}
        ></Input>
        <Input
          classes={{
            root: styles.form__text,
            focused: styles.form_focused,
          }}
          placeholder={textPlaceholder ? textPlaceholder : "Type something..."}
          fullWidth
          multiline
        ></Input>
        <Button classes={{ root: styles.form__button }}>{buttonText}</Button>
      </div>
    </div>
  );
};

export default Form;

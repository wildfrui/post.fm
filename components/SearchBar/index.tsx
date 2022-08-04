import React, { useRef, useLayoutEffect, useState } from "react";
import Input from "@mui/material/Input";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  return (
    <React.Fragment>
      <div className={styles.wrapper}>
        <Input
          onFocus={() => {
            setFocused(true);
          }}
          inputRef={inputRef}
          classes={{ root: styles.input }}
          placeholder="Поиск"
        ></Input>
      </div>
    </React.Fragment>
  );
};

export default SearchBar;

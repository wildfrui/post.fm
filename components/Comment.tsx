import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import styles from "./Comment.module.css";

interface CommentProps {
  author: string;
  text: string;
  likes: number;
}

const Comment: React.FC<CommentProps> = ({ author, text, likes }) => {
  return (
    <div>
      <Card>
        <CardContent classes={{ root: styles.comment__content }}>
          <div className={styles.comment__info}>
            <Typography classes={{ root: styles.comment__author }}>
              {author}
            </Typography>
            <Typography classes={{ root: styles.comment__text }}>
              {text}
            </Typography>
          </div>
          <Button startIcon={<FavoriteBorderIcon />}>{likes}</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Comment;

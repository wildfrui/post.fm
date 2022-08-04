import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { deepPurple } from "@mui/material/colors";

import styles from "./Comment.module.css";

interface CommentProps {
  author: string;
  text: string;
  likes: number;
}

const Comment: React.FC<CommentProps> = ({ author, text, likes }) => {
  return (
    <div>
      <Card classes={{ root: styles.comment__container }}>
        <CardContent classes={{ root: styles.comment__content }}>
          <div className={styles.comment__header}>
            <div className={styles.comment__user}>
              <Avatar
                classes={{ root: styles.comment__photo }}
                sx={{ bgcolor: deepPurple[500] }}
              >
                K
              </Avatar>
              <Typography classes={{ root: styles.comment__author }}>
                {author}
              </Typography>
            </div>
            <Button startIcon={<FavoriteBorderIcon />}>{likes}</Button>
          </div>

          <div className={styles.comment__info}>
            <Typography classes={{ root: styles.comment__text }}>
              {text}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Comment;

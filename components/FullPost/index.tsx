import React from "react";
import { useState } from "react";
import CommentList from "../CommentList";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ReplayIcon from "@mui/icons-material/Replay";
import { deepOrange, deepPurple } from "@mui/material/colors";
import styles from "./FullPost.module.css";

interface FullPostProps {
  author: string;
  title: string;
  text: string;
  likes: number;
  favorites: number;
}

const FullPost: React.FC<FullPostProps> = ({
  title,
  text,
  likes,
  favorites,
  author,
}) => {
  return (
    <div className={styles.fullpost__container}>
      <Card classes={{ root: styles.fullpost__card }}>
        <CardContent classes={{ root: styles.fullpost__content }}>
          <Typography classes={{ root: styles.fullpost__title }}>
            {title}
          </Typography>
          <Typography classes={{ root: styles.fullpost__text }}>
            {text}
          </Typography>
          {/* <Typography classes={{ root: styles.post__text }}>{text}</Typography> */}
          <div className={styles.fullpost__buttons}>
            <Button startIcon={<ChatBubbleOutlineOutlinedIcon />}>
              {likes}
            </Button>
            <Button startIcon={<FavoriteBorderIcon />}>{likes}</Button>
            <Button startIcon={<BookmarkBorderOutlinedIcon />}>
              {favorites}
            </Button>
            <Button startIcon={<ReplayIcon />}>{likes}</Button>
          </div>
          <div className={styles.fullpost__usercontainer}>
            <Paper classes={{ root: styles.fullpost__user }}>
              <Avatar
                classes={{ root: styles.fullpost__photo }}
                sx={{ bgcolor: deepOrange[500] }}
              >
                O
              </Avatar>
              <Typography classes={{ root: styles.fullpost__author }}>
                {author}
              </Typography>
            </Paper>
            <Button
              classes={{ root: styles.fullpost__userbutton }}
              startIcon={<PersonAddAltIcon />}
            >
              Подписаться
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FullPost;

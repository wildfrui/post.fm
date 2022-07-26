import { useState } from "react";
import CommentList from "./CommentList";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import styles from "./Post.module.css";

interface PostInterface {
  author: string;
  title: string;
  text: string;
  comments?: [];
}

const Post: React.FC<PostInterface> = ({ author, title, text }) => {
  const [likes, setLikes] = useState(0);
  const [favorites, setFavorites] = useState(0);
  return (
    <div className={styles.post__container}>
      <Card classes={{ root: styles.post__card }}>
        <CardContent classes={{ root: styles.post__content }}>
          <Typography classes={{ root: styles.post__author }}>
            {author}
          </Typography>
          <Typography classes={{ root: styles.post__title }}>
            {title}
          </Typography>
          <Typography classes={{ root: styles.post__text }}>{text}</Typography>
          <div className={styles.post__buttons}>
            <Button
              startIcon={<FavoriteBorderIcon />}
              onClick={() => setLikes((prev) => prev + 1)}
            >
              {likes}
            </Button>
            <Button
              startIcon={<GradeIcon />}
              onClick={() => setFavorites((prev) => prev + 1)}
            >
              {favorites}
            </Button>
          </div>
        </CardContent>
        <CommentList></CommentList>
      </Card>
    </div>
  );
};

export default Post;

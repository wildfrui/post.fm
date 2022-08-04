import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GradeIcon from "@mui/icons-material/Grade";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ReplayIcon from "@mui/icons-material/Replay";
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
    <div className={styles.container}>
      <Card classes={{ root: styles.card }}>
        <CardContent classes={{ root: styles.content }}>
          <div className={styles.info}>
            <div className={styles.user}>
              <Typography classes={{ root: styles.author }}>
                {author}
              </Typography>
              <Typography classes={{ root: styles.date }}>
                {"2 часа назад"}
              </Typography>
            </div>

            <Button
              classes={{ root: styles.subscribe }}
              startIcon={<PersonAddAltIcon />}
            >
              Подписаться
            </Button>
          </div>

          <Typography classes={{ root: styles.title }}>{title}</Typography>
          <Typography classes={{ root: styles.text }}>{text}</Typography>
          <div className={styles.buttons}>
            <Button
              classes={{ root: styles.comments }}
              startIcon={<ChatBubbleOutlineOutlinedIcon />}
            >
              {likes}
            </Button>
            <Button
              classes={{ root: styles.favorite }}
              startIcon={<FavoriteBorderIcon />}
            >
              {likes}
            </Button>
            <Button
              classes={{ root: styles.bookmark }}
              startIcon={<BookmarkBorderOutlinedIcon />}
            ></Button>
            <Button
              classes={{ root: styles.replay }}
              startIcon={<ReplayIcon />}
            ></Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Post;

import React from "react";
import CreateComment from "../CreateComment";
import Comment from "../Comment";
import Button from "@mui/material/Button";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import styles from "./CommentList.module.css";

type CommentListProps = {};

const CommentList: React.FC<CommentListProps> = () => {
  return (
    <div className={styles.commentlist__container}>
      <div className={styles.commentlist__wrapper}>
        <div className={styles.commentlist__header}>
          <p className={styles.commentlist__number}>50 комментариев</p>
          <div className={styles.commentlist__buttons}>
            <Button startIcon={<NotificationsNoneOutlinedIcon />}></Button>
            <Button startIcon={<NotificationsNoneOutlinedIcon />}></Button>
          </div>
        </div>

        <CreateComment></CreateComment>

        <Comment
          author={"Михаил"}
          text="да как вы еще не поймете что тинькофф это еще та помойка
          уходить пора от туда тем кто еще там работает
          сегодня хорошо а завтра проблемы начнутся
          уже сколько отзывов об этом банке"
          likes={4}
        ></Comment>
        <Comment
          author={"Проксима Йовская"}
          text="я сделал ноги в райф после того как потанинофф комиссию конскую ввел)) А так даже кешбек 1%, и карта бесплатная. для редких покупок и переводов мелких свифтовых мне подходит"
          likes={4}
        ></Comment>
        <Comment
          author={"Александр Соколов"}
          text="я из-за экспорта перешел туда
          это конечно небо и земля в сравнении с другими банками НЕ в пользу райфа... Точка, Модуль гораздо продвинутей и оперативней, но через них не могу уже работать(((
          но при выборе райф и тинька даже мыслей не было про тиньк)"
          likes={4}
        ></Comment>
        <Comment
          author={"Александр Соколов"}
          text="я из-за экспорта перешел туда
          это конечно небо и земля в сравнении с другими банками НЕ в пользу райфа... Точка, Модуль гораздо продвинутей и оперативней, но через них не могу уже работать(((
          но при выборе райф и тинька даже мыслей не было про тиньк)"
          likes={4}
        ></Comment>
        <Comment
          author={"Александр Соколов"}
          text="я из-за экспорта перешел туда
          это конечно небо и земля в сравнении с другими банками НЕ в пользу райфа... Точка, Модуль гораздо продвинутей и оперативней, но через них не могу уже работать(((
          но при выборе райф и тинька даже мыслей не было про тиньк)"
          likes={4}
        ></Comment>
        <Comment
          author={"Александр Соколов"}
          text="я из-за экспорта перешел туда
          это конечно небо и земля в сравнении с другими банками НЕ в пользу райфа... Точка, Модуль гораздо продвинутей и оперативней, но через них не могу уже работать(((
          но при выборе райф и тинька даже мыслей не было про тиньк)"
          likes={4}
        ></Comment>
      </div>
    </div>
  );
};
<NotificationsNoneOutlinedIcon></NotificationsNoneOutlinedIcon>;
export default CommentList;

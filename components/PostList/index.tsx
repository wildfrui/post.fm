import React from "react";
import Post from "../Post";
import styles from "./PostList.module.css";

type PostListProps = {};

const PostList: React.FC<PostListProps> = () => {
  return (
    <div className={styles.container}>
      <div>
        <Post
          author={"Прохладный мангал"}
          title={
            "Минцифры убрало из списка ИТ-компаний банки, сотовых операторов, а ещё «Делимобиль», ЦБ, РЖД и других "
          }
          text={"Всего — более 400 компаний."}
        ></Post>
        <Post
          author={"Selectel"}
          title={
            "«Цель выполнена полностью»: «Синема парк» и «Формула кино» отказалась от «кинопродуктов» через полдня после анонса "
          }
          text={
            "В компании пояснили, что так хотели привлечь внимание к проблемам кинотеатров."
          }
        ></Post>
        <Post
          author={"Frank Media"}
          title={
            "«Тинькофф», Сбербанк, ВТБ и «Альфа-банк» исключили из списка IT-компаний "
          }
          text={
            "Статус аккредитованной IT-компании выгоден для бизнеса, так как позволяет ему освободиться на три года от налога на прибыль. Кроме того, сотрудники аккредитованной IT-компании получают отсрочку от армии и могут взять льготную ипотеку для IT-специалистов."
          }
        ></Post>
        <Post
          author={"Прохладный мангал"}
          title={
            "Минцифры убрало из списка ИТ-компаний банки, сотовых операторов, а ещё «Делимобиль», ЦБ, РЖД и других "
          }
          text={"Всего — более 400 компаний."}
        ></Post>
        <Post
          author={"Selectel"}
          title={
            "«Цель выполнена полностью»: «Синема парк» и «Формула кино» отказалась от «кинопродуктов» через полдня после анонса "
          }
          text={
            "В компании пояснили, что так хотели привлечь внимание к проблемам кинотеатров."
          }
        ></Post>
        <Post
          author={"Frank Media"}
          title={
            "«Тинькофф», Сбербанк, ВТБ и «Альфа-банк» исключили из списка IT-компаний "
          }
          text={
            "Статус аккредитованной IT-компании выгоден для бизнеса, так как позволяет ему освободиться на три года от налога на прибыль. Кроме того, сотрудники аккредитованной IT-компании получают отсрочку от армии и могут взять льготную ипотеку для IT-специалистов."
          }
        ></Post>
      </div>
    </div>
  );
};

export default PostList;

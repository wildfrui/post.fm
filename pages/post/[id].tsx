import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import FullPost from "../../components/FullPost";
import CommentList from "../../components/CommentList";

import { MainLayout } from "../../layouts/MainLayout";

type Props = {};

const PostPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <MainLayout>
        <React.Fragment>
          <FullPost
            title="ФАС раскритиковала законопроект об операторе цифровой рекламы, фактически запрещающий сайты объявлений — «Интерфакс»"
            text="Переводила д/с себе на счет, активно пользовалась услугами банка, оплачивала товары/услуги, откладывала на вклад, начала пользоваться Тинькофф Инвестиции и т.п., все было вроде хорошо и вопросов со стороны банка не возникало
          С апреля  г потребность пользоваться всем спектром банковских услуг АО «Тинькофф Банк» сократилась, нужно было большую часть суммы отправлять родителям-пенсионерам, + пару небольших платежей другим физ.лицам (примерно 2-3 небольших перевода за месяц, в среднем размером 2000-8000 руб).
          
          После последнего подобного перевода родственнику 21.07.2022 г. в размере 3000 руб. от АО «Тинькофф Банк» поступил запрос на предоставление огромного перечня документов для уточнения по некоторым банковским операциям в рамках 115-ФЗ
          
          Мной было предоставлено все, что необходимо в тот же день, включая выписки, договор и акты, в рамках которых у меня были поступления на счет ИП. я сделал ноги в райф после того как потанинофф комиссию конскую ввел)) А так даже кешбек 1%, и карта бесплатная. для редких покупок и переводов мелких свифтовых мне подходит Переводила д/с себе на счет, активно пользовалась услугами банка, оплачивала товары/услуги, откладывала на вклад, начала пользоваться Тинькофф Инвестиции и т.п., все было вроде хорошо и вопросов со стороны банка не возникало
          С апреля  г потребность пользоваться всем спектром банковских услуг АО «Тинькофф Банк» сократилась, нужно было большую часть суммы отправлять родителям-пенсионерам, + пару небольших платежей другим физ.лицам (примерно 2-3 небольших перевода за месяц, в среднем размером 2000-8000 руб).
          
          После последнего подобного перевода родственнику 21.07.2022 г. в размере 3000 руб. от АО «Тинькофф Банк» поступил запрос на предоставление огромного перечня документов для уточнения по некоторым банковским операциям в рамках 115-ФЗ
          
          Мной было предоставлено все, что необходимо в тот же день, включая выписки, договор и акты, в рамках которых у меня были поступления на счет ИП. я сделал ноги в райф после того как потанинофф комиссию конскую ввел)) А так даже кешбек 1%, и карта бесплатная. для редких покупок и переводов мелких свифтовых мне подходит Переводила д/с себе на счет, активно пользовалась услугами банка, оплачивала товары/услуги, откладывала на вклад, начала пользоваться Тинькофф Инвестиции и т.п., все было вроде хорошо и вопросов со стороны банка не возникало
          С апреля  г потребность пользоваться всем спектром банковских услуг АО «Тинькофф Банк» сократилась, нужно было большую часть суммы отправлять родителям-пенсионерам, + пару небольших платежей другим физ.лицам (примерно 2-3 небольших перевода за месяц, в среднем размером 2000-8000 руб).
          
          После последнего подобного перевода родственнику 21.07.2022 г. в размере 3000 руб. от АО «Тинькофф Банк» поступил запрос на предоставление огромного перечня документов для уточнения по некоторым банковским операциям в рамках 115-ФЗ
          
          Мной было предоставлено все, что необходимо в тот же день, включая выписки, договор и акты, в рамках которых у меня были поступления на счет ИП. я сделал ноги в райф после того как потанинофф комиссию конскую ввел)) А так даже кешбек 1%, и карта бесплатная. для редких покупок и переводов мелких свифтовых мне подходит Переводила д/с себе на счет, активно пользовалась услугами банка, оплачивала товары/услуги, откладывала на вклад, начала пользоваться Тинькофф Инвестиции и т.п., все было вроде хорошо и вопросов со стороны банка не возникало
          С апреля  г потребность пользоваться всем спектром банковских услуг АО «Тинькофф Банк» сократилась, нужно было большую часть суммы отправлять родителям-пенсионерам, + пару небольших платежей другим физ.лицам (примерно 2-3 небольших перевода за месяц, в среднем размером 2000-8000 руб).
          
          После последнего подобного перевода родственнику 21.07.2022 г. в размере 3000 руб. от АО «Тинькофф Банк» поступил запрос на предоставление огромного перечня документов для уточнения по некоторым банковским операциям в рамках 115-ФЗ
          
          Мной было предоставлено все, что необходимо в тот же день, включая выписки, договор и акты, в рамках которых у меня были поступления на счет ИП. я сделал ноги в райф после того как потанинофф комиссию конскую ввел)) А так даже кешбек 1%, и карта бесплатная. для редких покупок и переводов мелких свифтовых мне подходит"
            likes={5}
            favorites={18}
            author="Ольга Миловидова"
          ></FullPost>
          <CommentList></CommentList>
        </React.Fragment>
      </MainLayout>
    </div>
  );
};

export default PostPage;

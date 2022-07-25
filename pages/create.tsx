import { NextPage } from "next";
import Box from "@mui/material/Box";
import { PostForm } from "../components/PostForm";

import { MainLayout } from "../layouts/MainLayout";

type Props = {};

const CreatePage: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <PostForm></PostForm>
      </MainLayout>
    </div>
  );
};

export default CreatePage;

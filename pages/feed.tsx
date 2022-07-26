import { NextPage } from "next";
import Box from "@mui/material/Box";
import PostList from "../components/PostList";

import { MainLayout } from "../layouts/MainLayout";

type Props = {};

const FeedPage: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <PostList></PostList>
      </MainLayout>
    </div>
  );
};

export default FeedPage;

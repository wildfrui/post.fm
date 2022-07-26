import { NextPage } from "next";
import Box from "@mui/material/Box";
import { PostForm } from "../components/PostForm";

import { MainLayout } from "../layouts/MainLayout";

type Props = {};

const FavoritesPage: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <div>Favorite</div>
      </MainLayout>
    </div>
  );
};

export default FavoritesPage;

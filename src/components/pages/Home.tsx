import { memo, FC } from "react";
import { Outlet } from "react-router-dom";
import { HeaderLayout } from "../template/HeaderLayout";

export const Home: FC = memo(() => {
  return (
    <>
      <p>Home</p>
      <Outlet />
    </>
  );
});

import { memo, FC } from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagemant } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/template/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";

export const Router: FC = memo(() => {
  return (
    /**
     * 子のルートは絶対パス("/" がついているパス)ではなく
     * 相対パス("/" がついていないパス)で指定する
     *
     * ルートがネストしている場合は index-route を指定する
     */
    <LoginUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home">
          <Route
            index={true}
            element={
              <HeaderLayout>
                <Home />
              </HeaderLayout>
            }
          />
          <Route
            path="user_management"
            element={
              <HeaderLayout>
                <UserManagemant />
              </HeaderLayout>
            }
          />
          <Route
            path="setting"
            element={
              <HeaderLayout>
                <Setting />
              </HeaderLayout>
            }
          />
          <Route
            path="*"
            element={
              <HeaderLayout>
                <Page404 />
              </HeaderLayout>
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </LoginUserProvider>
  );
});

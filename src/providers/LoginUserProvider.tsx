import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  FC,
} from "react";

import { User } from "../types/api/user";

type LoginUser = User & { isAdmin: boolean };
export type LoginUserContextType = {
  loginUser: LoginUser | null;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>;
};
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);

type Props = {
  children?: ReactNode;
};

export const LoginUserProvider: FC<Props> = ({ children }) => {
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};

import { useCallback, useState } from "react";

import { User } from "../types/api/user";

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

// 選択したユーザ情報を特定しモーダルを表示するカスタムフック
export const useSelectUsers = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);

    /**
     * targetUser が find メソッドで見つかるかは不定のため
     * コンパイラは undefined が返ってくる可能性があると
     * 判断してエラーを発生させる
     * -> useState の型に undefined を含めてやるか
     *    変数名の後に "!" をつけることで回避可能
     * -> "!" は undefined が返却されることがないということを
     *    コンパイラに明示的に伝えるための構文
     * -> "!" の使用は確実に undefined が返却されることが
     *    保証されているときのみに限定する
     */
    setSelectedUser(targetUser!);
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};

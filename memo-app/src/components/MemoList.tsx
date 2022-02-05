import { FC } from "react";

type Props = {
  memos: string[],
  onClickDelete:(index:number) => void;
}
export const MemoList:FC<Props> = props => {
  const {memos, onClickDelete} = props
  console.log("child")
  return (
    <>
      <p>メモ一覧</p>
      <ul>
      {memos.map((memo, index)=>(
        <li key={memo}>
          <p>{memo}</p>              
          {/* 引数含める時は下記のように関数定義ぽくする？ */}
          <button onClick={()=>onClickDelete(index)}>削除</button>
        </li>
      ))}
      </ul>
    </>
  );
};
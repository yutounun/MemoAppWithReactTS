import { ChangeEvent, useState, FC, useCallback } from "react"
import styled from "styled-components"
import { MemoList } from "./MemoList"
import { useMemoList } from "../hooks/useMemolist"

export const App: FC = () => {
  const {memos, addTodo, deleteTodo} = useMemoList();
  const [text, setText] = useState<string>("")
  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => setText(e.target.value);
  const [de, setDe] = useState<string>("right")
  const onClickAdd = () => {
    addTodo(text);
    // memoに入れたからテキストは空にする
    setText("");
    console.log(memos)
  }
  // Appが更新されて再レンダリングする時に、childhは再レンダリングしないようにする。Appで更新かかると関数も
  // もう一度作られるからもしろんchildにも影響出てレンダリングされる。けどその関数の再作成を止めるためのもの
  const onClickDelete = useCallback((index:number) => {
    deleteTodo(index);
  }, [deleteTodo]);

  return (
    <>
      <h1>簡単メモアプリ</h1>
      <input type="text" value={text} onChange={onChangeText}/>
      <button onClick={onClickAdd}>追加</button>
      {de}
      <div>
        <MemoList memos={memos} onClickDelete={onClickDelete}></MemoList>
      </div>
    </>
  )
}
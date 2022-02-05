import { useState, useCallback } from "react";

export const useMemoList = () => {
  // textが配列になったもの
  const [memos, setMemos] = useState<string[]>([])

  const addTodo = useCallback((text: string) =>{
    // 既存のテキスト
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos)
  }, [memos])

  const deleteTodo = useCallback((index:number) => {
    const newMemos = [...memos]
    newMemos.splice(index, 1)
    console.log("onDelete")
    setMemos(newMemos);
  }, [memos]);
  return {memos, addTodo, deleteTodo};
};
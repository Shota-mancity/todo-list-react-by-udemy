import React, { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { InputTodo } from "./components/InputTodo";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState("");

  const onChangeTodo = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickAddComp = (index) => {
    const newTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newTodos);
    onClickDelete(index);
  };
  const onClickBack = (index) => {
    const newTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newTodos);
    const compTodo = [...completeTodos];
    compTodo.splice(index, 1);
    setCompleteTodos(compTodo);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodo={onChangeTodo}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red", textAlign: "center" }}>
          登録できるTODO5個まで！消化しろ〜
        </p>
      )}

      <IncompleteTodos
        todos={incompleteTodos}
        onClickAddComp={onClickAddComp}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};

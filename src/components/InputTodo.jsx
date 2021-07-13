import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChangeTodo, onClick, disabled } = props;

  const style = {
    backgroundColor: "#c1ffff",
    width: "400px",
    height: "30px",
    margin: "8px",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChangeTodo}
        disabled={disabled}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};

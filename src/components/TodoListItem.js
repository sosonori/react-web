import React from 'react';

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text } = todo;
  return (
    <div className="TodoListItem-virtualized">
      <div className="todo-item" style={style}>
        <input className="chk" onClick={() => onToggle(id)} type="checkbox" />
        <div className="text">{text}</div>
        <button className="btn-del" onClick={() => onRemove(id)}>
          삭제
        </button>
      </div>
    </div>
  );
};

// export default TodoListItem;
export default React.memo(TodoListItem);

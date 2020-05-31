import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div className="wrap">
      <div className="title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;

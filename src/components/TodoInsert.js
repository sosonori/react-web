import React, { useState, useCallback } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      value.length === 0 ? alert('내용을 입력하세요.') : onInsert(value);
      setValue(''); // value 값 초기화
      // submit 이벤트는 브라우저에서 새고로침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="todo-insert" onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="내용을 입력하세요"
      />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInsert;

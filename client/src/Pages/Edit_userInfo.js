import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const saveUserinfo = () => {};

const EditPage = () => {
  return (
    <div>
      <Link to="/mypage">
        <button type="button"> {`<-- 뒤로가기`} </button>
      </Link>
      수정할 내용
      <button type="button">저장하기</button>
      {/* 저장 완료 되었습니다. */}
    </div>
  );
};

export default EditPage;

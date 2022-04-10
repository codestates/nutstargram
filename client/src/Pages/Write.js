import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const WritePage = () => {
  // 사진을 로컬에서부터 업로드하는 기능이 있어야합니다.
  // 만들어준 state에 파일객체를 담아서 서버에 업로드 요청을 보낸다.
  const [postfiles, setPostfiles] = useState({
    file: [],
    previewURL: '',
  });
  // 작성한 글?
  const [write, setWrite] = useState('');

  const uploadFile = e => {
    e.stopPropagation(); // equivalent to preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0]; // 배열로 할당해서 여러개 올릴 수 있는 기능
    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      // 파일 불러오는 과정이 끝났을 때 사용하는 메소드. 성공과 실패에 상관없음.
      setPostfiles({
        file: filesInArr,
        previewURL: reader.result,
      });
    };
    if (file) {
      // console.log(file);
      reader.readAsDataURL(file); // 파일 등을 읽어올 때 사용하는 메소드. 데이터를 data:URL 형식으로 읽어온다.
    }
  };
  let profile_preview = null; // 미리보기 기능
  if (postfiles.file !== null) {
    profile_preview = postfiles.file[0]?.type.includes('image/') ? (
      <img src={postfiles.previewURL} />
    ) : (
      <video src={postfiles.previewURL} />
    );
  }
  const formData = new FormData(); // formData를 활용하면
  formData.append('json', JSON.stringify({ content: 'postContent' }));
  // postfiles?.file.map(eachfile => {
  //   formData.append('path', eachfile);
  // });
  Axios.post(
    // 서버에 업로드하는 파일들을 보내줘야한다.
    'uploadPosts',
    { Authorization: localStorage.getItem('token') },
    formData,
  );
  return (
    <div>
      <h2>일기 작성 페이지</h2>
      <Link to="/main">
        <button>뒤로가기</button>
      </Link>
      <form>
        <input
          id="upload-file"
          type="file"
          accept="image/*"
          multiple
          onChange={uploadFile}
        ></input>{' '}
        <label htmlFor="upload-file">파일선택</label>
      </form>
      <span>미리보기..?</span>
      <div className="imageContainer">
        <img
          src="https://vernixgroup.com/wp-content/themes/consultix/images/no-image-found-360x250.png"
          alt="no-img"
        />
      </div>
      <textarea></textarea>
      <button className="btn-post">일기 쓰기</button>
    </div>
  );
};
export default WritePage;

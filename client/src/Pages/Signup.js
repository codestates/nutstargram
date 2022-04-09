import { Fragment, React } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <Fragment>
      <div>회원가입</div>
      {/* input type text 보다는 한줄 코드 스타일링을 권장 
      => textarea
      => 하지만 input type text 가 회원 관리단에는 예쁠듯(한줄뿐이니까)
      => textarea는 2줄 이상시 유효 */}
      <input type="text" placeholder="User Name"></input>
      <br />
      <input type="text" placeholder="Email"></input>
      <br />
      <button>Email Confirm</button>
      <br />
      <input type="text" placeholder="Mobile"></input>
      <br />
      <input type="text" placeholder="Password"></input>
      <br />
      <input type="text" placeholder="Confirm Password"></input>
      <br />
      <Link to="/">
        <button>SignUp 허락한다</button>
      </Link>
    </Fragment>
  );
};

export default SignUpPage();

import { Fragment, React } from 'react';

const SignUpPage = () => {
  return (
    <Fragment>
      <div>회원가입</div>
      {/* input type text 보다는 한줄 코드 스타일링을 권장 
      => textarea
      => 하지만 input type text 가 회원 관리단에는 예쁠듯(한줄뿐이니까)
      => textarea는 2줄 이상시 유효 */}
      <input type="text" placeHolder="User Name"></input>
      <br />
      <input type="text" placeHolder="Email"></input>
      <br />
      <button>Email Confirm</button>
      <br />
      <input type="text" placeHolder="Mobile"></input>
      <br />
      <input type="text" placeHolder="Password"></input>
      <br />
      <input type="text" placeHolder="Confirm Password"></input>
      <br />
      <button>SignUp</button>
    </Fragment>
  );
};

export default SignUpPage;

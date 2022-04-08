require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

module.exports = {
  generateAccessToken: data => {
    // TODO: Access token으로 sign합니다.
    // HINT: 토큰을 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    const token = sign(data, process.env.ACCESS_TOKEN);
    // eslint-disable-next-line spaced-comment
    /*console.log("index.js!!",token) 토큰나옴*/
    return token;
  },
  sendAccessToken: (res, accessToken) => {
    // TODO: JWT 토큰을 쿠키로 전달합니다.
    res
      .cookie('jwt', accessToken, {
        httpOnly: true,
      })
      .json({ message: 'ok' });
    // eslint-disable-next-line spaced-comment
    //console.log('index.js sendcookie!',accessToken) 토큰나옴
  },
  isAuthorized: req => {
    // TODO: JWT 토큰 정보를 받아서 검증합니다.
    // HINT: jsonwebtoken 라이브러리의 verify 함수를 사용하여 decode된 payload를 리턴하세요. (공식 문서의 Synchronous한 방법을 사용합니다)
    const token = req.cookies.jwt;
    const authorized = verify(token, process.env.ACCESS_TOKEN);
    return authorized;
  },
};

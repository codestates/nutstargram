const { users } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = (req, res) => {
  const { jwt } = req.cookies;
  // console.log('jwt=====',jwt)
  // 구조분해 할당

  if (!jwt) {
    // 토큰에 일치 하는 유저가아닐때
    res.send({ data: null, message: 'not authorized' });
  } else {
    // 토큰에 일치하는유저
    const accessTokenData = isAuthorized(req);
    // console.log('accessTokenData=====',accessTokenData)
    const { id, email, username, mobile, createdAt, updatedAt } =
      accessTokenData;
    res.send({
      data: {
        userInfo: {
          id,
          email,
          username,
          mobile,
          createdAt,
          updatedAt,
        },
      },
      message: 'ok',
    });
  }
  // res.status(401).send({ data: null, message: 'not authorized' });
};

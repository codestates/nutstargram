const { users } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // rep 에 이메일 받으면??
  // 이메일로 findOne 찾아서
  // 해당유저 contents 의 이미지와 text보여주기
  console.log(req.cookies.jwt);
  const userToken = req.cookies;

  if (!userToken) {
    res.status(400).send({ message: '다시 보내주세요' });
    // console.log(mainUser);

    // console.log(res);
  } else {
    const jwt = isAuthorized(req);
    res.status(200).send({ data: { jwt }, message: 'ok' });
  }

  // res.status(500);
};

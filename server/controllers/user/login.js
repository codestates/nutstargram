const { users } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // console.log('dd', req);
  const { email, password } = req.body; // 구조분해 할당
  // console.log(req.body);
  const userInfo = await users.findOne({
    where: { email, password },
  });

  if (!userInfo) {
    //! 이메일이 디비에 없을경우 400 "message":"email does not exists"
    // if (userInfo.email) {
    //   res.status(400).send({ message: 'email does not exists' });
    // } else {
    //   //! 비번이 안맞을경우 401 "message":"incorrect password"
    //   res.status(401).send({ message: 'incorrect password' });
    // }
  } else {
    // ! 성공시 200 "accessToken":accessToken,"message":"ok"
    const accessToken = generateAccessToken(userInfo.dataValues);
    // console.log('21번');
    return sendAccessToken(res, accessToken);
  }
  res.status(500).send({ message: 'err' });
};

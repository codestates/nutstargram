const { users } = require('../../models');
const { generateAccessToken, sendAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  // console.log('dd', req);
  const { email, password } = req.body; // 구조분해 할당
  // console.log(req.body);
  await users
    .findOne({
      where: { email, password },
    })
    .then(data => {
      // console.log(data);
      if (!data) {
        res.status(500).send({ message: 'err' });
      } else {
        // ! 성공시 200 "accessToken":accessToken,"message":"ok"
        const accessToken = generateAccessToken(data.dataValues);
        // console.log('server/login', data);
        return sendAccessToken(res, accessToken, data);
      }
    });

  // res.status(500).send({ message: 'err' });
};

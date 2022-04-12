const { contents } = require('../../models');

module.exports = async (req, res) => {
  // users.update({뭘 업데이트 할 건지},
  //       {where:{어느 정보를 가진 row에서?}}
  // console.log('body!!!', req.body);
  const {
    id,
    user_id,
    content_img,
    content_text,
    content_emoji,
    content_weather,
  } = req.body;

  await contents
    .update(
      {
        content_img,
        content_text,
        content_emoji,
        content_weather,
      },
      {
        where: { id },
      },
    )
    .then(data => {
      if (data[0] === 1) {
        res
          .status(200)
          .send({ data: { contentInfo: '컨텐츠 정보 넣기!' }, message: 'ok' });
      } else {
        res.status(400).send({ message: '변경할 수 없는 데이터' });
      }
    })
    .catch(err => {
      console.log(err);
      res.Status(500);
    });
};

const multer = require('multer');
const path = require('path');
const { contents } = require('../../models');

const PORT = 4000;

module.exports = async (req, res) => {
  console.log(req.body);
  const { user_id, content_img, content_text, content_emoji, content_weather } =
    req.body;

  // app.use(express.static('public'));

  // const storage = multer.diskStorage({
  //   destination: './public/',
  //   filename: function (req, file, cb) {
  //     cb(null, 'imgfile' + Date.now() + path.extname(file.originalname));
  //   },
  // });
  const diary = await contents.create({
    user_id,
    content_img,
    content_text,
    // content_emoji,
    // content_weather,
  });
  console.log(diary instanceof contents); // boolean retrun
  if (diary) {
    res
      .status(200)
      .send({ data: { contentInfo: '컨텐츠 정보 넣기!' }, message: 'ok' });
  } else {
    res.status(400).send({ message: '변경할 수 없는 데이터' });
  }
};

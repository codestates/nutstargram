const multer = require('multer');
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const { contents } = require('../../models');

// const app = express();
// app.use(express.static('./public'));

const PORT = 4000;
// body-parser middleware use
// app.use(bodyparser.json());
// app.use(
//   bodyparser.urlencoded({
//     extended: true,
//   }),
// );
module.exports = async (req, res) => {
  console.log(req.body);
  const { user_id, content_img, content_text, content_emoji, content_weather } =
    req.body;
  // app.use(express.static('public'));

  // const storage = multer.diskStorage({
  //   destination: (req, file, cb) => {
  //     cb(null, './public');
  //   },
  //   filename: (req, file, cb) => {
  //     cb(
  //       null,
  //       file.fieldname + '-' + Date.now() + path.extreme(file.originalname),
  //     );
  //   },
  // });
  // const upload = multer({ storage: storage }).single('file'); // 하나의 파일을 업로드

  const diary = await contents.create({
    user_id,
    content_img,
    content_text,
    // content_emoji,
    // content_weather,
  });
  // console.log(diary instanceof contents);
  // boolean retrun
  if (diary) {
    res
      .status(200)
      .send({ data: { contentInfo: '컨텐츠 정보 넣기!' }, message: 'ok' });
  } else {
    res.status(400).send({ message: '변경할 수 없는 데이터' });
  }
};

require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const morgan = require('morgan');

const app = express();
const router = express.Router();

const controllers = require('./controllers');

// express.urlencoded는 bodyParser 미들웨어의 여러 옵션 중에 하나로 false 값일 시 node.js에 기본으로 내장된 queryString, true 값일 시 따로 설치가 필요한 npm qs 라이브러리를 사용한다.
app.use(
  morgan('      :method :url :status :res[content-length] - :response-time ms'),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PATCH'],
  }),
);

app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});

app.use(cookieParser());
app.patch('/editdiary', controllers.editdiary);
app.post('/write', controllers.write);
app.post('/login', controllers.login);
app.post('/logout', controllers.logout);
app.post('/oauth', controllers.oauth);
app.post('/signup', controllers.signup);
app.patch('/edituser', controllers.edituser);
app.get('/userinfo', controllers.userinfo);
app.get('/main', controllers.main);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log('https server runnning'));
} else {
  server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
}
module.exports = server;

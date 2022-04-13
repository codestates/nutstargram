module.exports = {
  main: require('./main'),
  editdiary: require('./contents/editdiary'),
  write: require('./contents/write'),
  login: require('./user/login'),
  logout: require('./user/logout'),
  oauth: require('./user/oauth'),
  signup: require('./user/signup'),
  edituser: require('./userinfo/edituser'),
  userinfo: require('./userinfo/userinfo'),
  auth: require('./userinfo/auth'),
};

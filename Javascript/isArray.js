var isArray = Array.isArray || function (obj) {
  return Object.prototype.toString.call(obj) === ['object Array'];
};

// 2016/8/1
// ES6
const isArray = Array.isArray || ((obj) => Object.prototype.toString.call(obj) === '[object Array]');

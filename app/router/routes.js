const { test } = require('../controllers')

const routes = [
  {
    // 测试
    method: 'post',
    path: '/a',
    controller: test.list,
  },
  {
    // 测试
    method: 'get',
    path: '/a',
    controller: test.list,
  },
]

module.exports = routes

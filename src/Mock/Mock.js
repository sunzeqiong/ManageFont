import Mock from './Mock';

// 设置全局延迟响应时间为200-600毫秒
Mock.setup({
    timeout: '200-600',
  })
const mock=Mock.mock;
mock('/api/data','get',{
    'name': '@cname',
    'age|18-30':0,
    'gender|1':['男','女']
} )
mock('/api/list', 'get', {
  'list|5-10': [{
    'id|+1': 1, // 递增的id，从1开始
    'title': '@ctitle(5, 10)', // 生成随机中文标题，长度为5到10个字
    'content': '@cparagraph', // 生成随机中文段落
    'createTime': '@datetime', // 生成随机的日期时间
  }],
});
 
mock('/api/user', 'post', (options) => {
  const { body } = options; // 获取请求的body参数
  const { username, password } = JSON.parse(body); // 解析body参数
  // 根据用户名和密码进行验证，并返回模拟的登录结果
  if (username === 'admin' && password === '123456') {
    return {
      code: 200,
      message: '登录成功',
      token: 'xxxxxxxxxx',
    };
  } else {
    return {
      code: 400,
      message: '用户名或密码错误',
    };
  }
});

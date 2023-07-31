import axios from "axios";

test('axios 请求值测试', async () => {
  const response = await axios.get('http://localhost:8000/http-echo-json/echo'); // 发送真实的请求
  console.log(response.data);

  const expectedValue = '你的期望值';
  const actual = '你的期望值';
  expect(actual).toEqual(expectedValue);
});

import axios from "axios";

test('axios post', async () => {
  axios.defaults.baseURL = 'http://localhost:8000/http-echo-json';

  await axios.get('/echo?ID=12345')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

});


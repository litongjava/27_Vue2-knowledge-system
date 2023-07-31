import axios from "axios";
import qs from "qs"

test('axios post', async () => {
  axios.defaults.baseURL = 'http://localhost:8000/http-echo-json';

  let requestObject = {
    firstName: 'Fred',
    lastName: 'Flintstone'
  };

  await axios.post('/echo', requestObject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});


import axios from 'axios';

//url 주소를 매번 입력하는 것은 좋은 방법이 아니므로, axois에서는 설정값을 공유할 수 있도록,
//create() 함수를 제공한다.
const Api = axios.create({
  baseURL: 'http://localhost:4000/',
});

export default Api;

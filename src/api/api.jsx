import axios from 'axios';

export async function fetchData() {
  const url = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/sido';
  const queryParams =
    '?' +
    encodeURIComponent('serviceKey') +
    '=' +
    encodeURIComponent('9RFjRc/Z+k7QyU9ji73gFB3PKb3VFuioIAN/S7dm2MbcvfODYwaJrRiEnFroeMh2C3TOTgfpEHL6xnLB2tcV9g==') +
    '&' +
    encodeURIComponent('json') +
    '=' +
    encodeURIComponent('3') +
    '&' +
    encodeURIComponent('pageNo') +
    '=' +
    encodeURIComponent('1');

  const response = await axios.get(url + queryParams);
  console.log('response data : ', response);

  return response.data;
}

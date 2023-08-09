import axios from 'axios';

export async function fetchData() {
  const url = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?up_kind_cd=417000';
  const queryParams =
    '&' +
    encodeURIComponent('serviceKey') +
    '=' +
    encodeURIComponent(process.env.REACT_APP_DATA_API_KEY) +
    '&' +
    encodeURIComponent('json') +
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

import axios from 'axios';

/*
 * 오픈API (유기동물 조회)
 * URL : http://apis.data.go.kr
 *
 * 1) [시/도]
 * 2) [시/군/구]
 * 3) [보호소]
 * 4) [품종]
 * 5) [유기동물]
 */

const DATA_API_KEY =
  '&' +
  encodeURIComponent('serviceKey') +
  '=' +
  encodeURIComponent(process.env.REACT_APP_DATA_API_KEY) +
  '&' +
  encodeURIComponent('_type') +
  '=' +
  encodeURIComponent('json');

const BASE_URL = 'http://apis.data.go.kr/1543061/abandonmentPublicSrvc';

/** 1) [시/도] - 오픈API 유기동물 데이터 조회  */
export async function SidoApi() {
  const url = `${BASE_URL}/sido`;
  const queryParams =
    '?' +
    encodeURIComponent('numOfRows') +
    '=' +
    encodeURIComponent(17) +
    '&' +
    encodeURIComponent('pageNo') +
    '=' +
    encodeURIComponent(1) +
    DATA_API_KEY;

  const response = await axios.get(url + queryParams);

  return response.data;
}

/** 2) [시/군/구] - 오픈API 유기동물 데이터 조회  */
export async function SigunguApi() {
  const url = `${BASE_URL}/sigungu`;
  const queryParams = '?' + encodeURIComponent('upr_cd') + '=' + encodeURIComponent(6110000) + DATA_API_KEY;

  const response = await axios.get(url + queryParams);
  return response.data;
}

/** 3) [보호소] - 오픈API 유기동물 데이터 조회  */
export async function ShelterApi() {
  const url = `${BASE_URL}/shelter`;
  const queryParams =
    '?' +
    encodeURIComponent('upr_cd') +
    '=' +
    encodeURIComponent(6110000) +
    '&' +
    encodeURIComponent('org_cd') +
    '=' +
    encodeURIComponent(3220000) +
    DATA_API_KEY;

  const response = await axios.get(url + queryParams);
  return response.data;
}

/** 4) [품종] - 오픈API 유기동물 데이터 조회  */
export async function AnimalKindApi() {
  const url = `${BASE_URL}/kind`;
  const queryParams = '?' + encodeURIComponent('up_kind_cd') + '=' + encodeURIComponent(417000) + DATA_API_KEY;

  const response = await axios.get(url + queryParams);
  return response.data;
}

/** 5) [유기동물] - 오픈API 유기동물 데이터 조회  */
export async function AnimalApi() {
  const url = `${BASE_URL}/abandonmentPublic`;
  const queryParams =
    '?' +
    encodeURIComponent('bgnde') +
    '=' +
    encodeURIComponent(20230801) +
    '&' +
    encodeURIComponent('endde') +
    '=' +
    encodeURIComponent(20230808) +
    DATA_API_KEY;

  const response = await axios.get(url + queryParams);
  return response.data;
}

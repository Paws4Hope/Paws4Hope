export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

export function validatePassword(password) {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/;
  return re.test(password);
}

export function validateNickname(nickname) {
  const re = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣 ]{2,30}$/;
  return re.test(nickname);
}

export function validatePhone(phone) {
  const re = /^\d{10,11}$/;
  return re.test(phone);
}

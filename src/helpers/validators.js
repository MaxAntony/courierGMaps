const validate = {};

validate.email = email => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
};

validate.phone = phone => {
  if (/[0-9]{9}/.test(phone)) {
    return true;
  }
  return false;
};

validate.numberLength = (number, length) => {
  if (String(number).length == length) {
    return true;
  }
  return false;
};

module.exports = validate;

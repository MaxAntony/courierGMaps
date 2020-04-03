const authCtrl = {};
const validate = require('../helpers/validations');

authCtrl.renderSignIn = (req, res) => {
  res.render('auth/signin');
};
authCtrl.renderSignUp = (req, res) => {
  res.render('auth/signup');
};
authCtrl.signUp = (req, res) => {
  console.log(req.body);
  let errors = [];
  const { name, email, phone, password, repeatPassword, direction } = req.body;
  if (name.length == 0) {
    errors.push('debe introducir un nombre');
  }

  if (!validate.email(email)) {
    errors.push('debe introducir un correo valido');
  }

  if (errors.length == 0) {
    res.render('client/panel');
  } else {
    res.render('auth/signup', { errors });
  }
};

module.exports = authCtrl;

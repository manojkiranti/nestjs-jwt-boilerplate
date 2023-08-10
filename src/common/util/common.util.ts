const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE =
  'Password should 1 uppercase, 1 lowercase along with number and special character';
const EMAIL_RULE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const REGEX = {
  PASSWORD_RULE,
  EMAIL_RULE,
};

export const MESSAGES = {
  PASSWORD_RULE_MESSAGE,
};

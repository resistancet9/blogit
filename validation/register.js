const Validator = require("validator");
const isEmpty = require("./isempty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!Validator.isLength(data.name || "", { min: 2, max: 20 })) {
    errors.name = "Name must be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.name || "")) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.password || "", { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 20 characters";
  }

  if (!Validator.equals(data.password || "", data.password2 || "")) {
    errors.password2 = "Password must match";
  }

  if (Validator.isEmpty(data.password2 || "")) {
    errors.password2 = "Confirm Password field is required";
  }

  if (Validator.isEmpty(data.password || "")) {
    errors.password = "Password field is required";
  }

  if (!Validator.isEmail(data.email || "")) {
    errors.email = "Email is Invalid";
  }

  if (Validator.isEmpty(data.email || "")) {
    errors.email = "Email field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

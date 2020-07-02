const {getMessage} = require('./messages');

const getValidatorError = (error, messagePath) => {
  if (!error) return null;

  const errorMessages = {};

  error.details.map((detail) => {
    const message = detail.message;
    const type = detail.type;
    const key = detail.context.key;

    const path = `${messagePath}.${key}.${type}`

    errorMessages[key] = getMessage(path) || message;
  })

  return errorMessages;
};

module.exports = { getValidatorError, getMessage };

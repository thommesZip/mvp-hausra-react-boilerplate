const apollo = require('apollo-server-lambda');


const mirrorMessage = async (parent, args) => {
  const { message } = args;
  if (!message) {
    throw new apollo.UserInputError('You must specify a message');
  }

  return {
    message: message
  }

};

exports.default = mirrorMessage;

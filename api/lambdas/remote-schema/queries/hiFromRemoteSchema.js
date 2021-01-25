
const apollo = require('apollo-server-lambda');

const hiFromRemoteSchema = async (parent, args) => {

return {
  message: "Hi from remote Schema 😃!"
}
};

exports.default = hiFromRemoteSchema;
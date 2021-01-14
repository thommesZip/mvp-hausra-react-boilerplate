

const action = async (req, res) => {

  const { session_variables, action, input, ...jsonBody } = req.body;

  return res.json({
    helloMessage: "Hi there, let´s go! 😎"
  })
}

exports.default = action;
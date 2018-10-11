
module.exports.AddTodo = {
  message: global.expressJoi.Joi.string().required().error(new Error("message is required")),
};

module.exports.DeleteTodo = {
  id: global.expressJoi.Joi.string().required().error(new Error("id is required")),
};



module.exports.login = {
  username: global.expressJoi.Joi.string().required().error(new Error("username is required")),
  password: global.expressJoi.Joi.string()
    .regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,16}$/)
    .error(new Error("Password should have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, minimum of 8 characters, and maximum of 16 characters"))
    .required()
};

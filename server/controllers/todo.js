"use strict";
const express = require("express"),
  router = express.Router(),
  Todo = require("../models/Todo_Model"),
  schema = require("./schema");

/**
 * fetch all todo's
 */
router.get(
  "/",
  (req, res) => {
    Todo.find({},'message')
      .sort({ createdAt: 1 })
      .then(Todo => {
        if (!Todo.length) {
          return res
            .status(global.config.default_not_found_http_code)
            .json({
              responseCode: global.config.default_not_found_http_code,
              responseDesc: global.config.default_not_found_message
            })
            .send();
        }

        return res
          .status(global.config.default_success_http_code)
          .send(Todo);
      })
      .catch(error => {
        throw error;
      });
  }
);

/**
 * add todo message.
 */
router.post(
  "/add",
  global.expressJoi.joiValidate(schema.AddTodo),
  (req, res) => {

    //save todo message and return id
    const todo = new Todo(req.body);
    return todo.save(todo)
      .then(data => {
        console.log(data);
        if (!data._id) {
          return res
            .status(global.config.default_not_found_http_code)
            .send({
              responseCode: global.config.default_error_http_code,
              responseDesc: global.config.default_error_message
            });
        }
        return res
          .status(global.config.default_success_http_code)
          .send({ id: data._id.toString(), message: data.message });
      })
  }
);


/**
 * delete a todo by id
 */
router.delete(
  "/:id",
  global.expressJoi.joiValidate(schema.DeleteTodo),
  (req, res) => {

    Todo.findByIdAndRemove(req.params.id)
      .then(data => {
        console.log(data);
        if (!data) {
          return res
            .status(global.config.default_not_found_http_code)
            .send({
              responseCode: global.config.default_error_http_code,
              responseDesc: global.config.default_error_message
            });
        }
        return res
          .status(global.config.default_success_http_code)
          .send({ removedId: data._id.toString(), removedMessage: data.message });
      })
      .catch(error => {
        throw error;
      });
  }
);




module.exports = router;

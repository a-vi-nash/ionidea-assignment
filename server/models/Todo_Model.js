/**
 * Module dependencies
 */
const Mongoose = require("mongoose"),
  Types = Mongoose.Schema.Types

/**
 * Todo Schema
 */
const modelName = "Todo";



const TodoSchema = new Mongoose.Schema(
  {
    message: {
      type: Types.String,
      required: true
    }
  },
  { timestamps: true }
);


module.exports = Mongoose.model("Todo", TodoSchema);

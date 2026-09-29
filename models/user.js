const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Handle the modern export style of the plugin
const passportLocalMongoosePlugin = require("passport-local-mongoose");
const passportLocalMongoose =
  passportLocalMongoosePlugin.default || passportLocalMongoosePlugin;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

// Pass the resolved function to the schema
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

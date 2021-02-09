"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var mongoose_1 = __importDefault(require("mongoose"));
// add your own uri below
var uri = "mongodb://library:library@localhost:27017/library?retryWrites=true&w=majority";
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
module.exports = mongoose_1.default;

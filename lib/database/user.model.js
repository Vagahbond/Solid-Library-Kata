"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var user_1 = require("../models/user");
var database_1 = require("./database");
exports.UserSchema = new database_1.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    status: user_1.Status,
    created_at: { type: Date, default: Date.now },
});
exports.UserModel = database_1.model('user', exports.UserSchema);

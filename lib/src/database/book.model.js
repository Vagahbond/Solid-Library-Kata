"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = exports.BookSchema = void 0;
var database_1 = require("./database");
exports.BookSchema = new database_1.Schema({
    author: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});
exports.BookSchema.index({
    author: 1,
    title: 1,
}, {
    unique: true
});
exports.BookModel = database_1.model('book', exports.BookSchema);

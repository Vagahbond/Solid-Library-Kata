"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowingModel = exports.BorrowingSchema = void 0;
var database_1 = require("./database");
exports.BorrowingSchema = new database_1.Schema({
    issuer: { type: database_1.Schema.Types.ObjectId, ref: 'user' },
    book: { type: database_1.Schema.Types.ObjectId, ref: 'book' },
    startDate: Date,
    endDate: {
        type: Date,
        required: false
    },
    created_at: {
        type: Date,
        default: Date.now
    },
});
exports.BorrowingSchema.index({
    autor: 1,
    title: 1,
}, {
    unique: true
});
exports.BorrowingModel = database_1.model('borrowing', exports.BorrowingSchema);

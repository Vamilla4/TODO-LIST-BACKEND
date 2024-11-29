"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserResponse = void 0;
const toUserResponse = (user) => {
    var _a;
    return {
        token: (_a = user.token) !== null && _a !== void 0 ? _a : "",
        username: user.username,
    };
};
exports.toUserResponse = toUserResponse;

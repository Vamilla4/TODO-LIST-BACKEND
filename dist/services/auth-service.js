"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const database_1 = require("../application/database");
const response_error_1 = require("../errors/response-error");
const user_model_1 = require("../models/user-model");
const user_validation_1 = require("../validations/user-validation");
const validation_1 = require("../validations/validation");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
class UserService {
    static register(req) {
        return __awaiter(this, void 0, void 0, function* () {
            //validate
            const registerReq = validation_1.Validation.validate(user_validation_1.UserValidation.REGISTER, req);
            const email = yield database_1.prismaClient.user.findFirst({
                where: {
                    email: registerReq.email
                }
            });
            if (email) {
                throw new response_error_1.ResponseError(400, "Email already exists!");
            }
            registerReq.password = yield bcrypt_1.default.hash(registerReq.password, 10);
            const user = yield database_1.prismaClient.user.create({
                data: {
                    username: registerReq.username,
                    email: registerReq.email,
                    password: registerReq.password,
                    token: (0, uuid_1.v4)()
                }
            });
            return (0, user_model_1.toUserResponse)(user);
        });
    }
}
exports.UserService = UserService;

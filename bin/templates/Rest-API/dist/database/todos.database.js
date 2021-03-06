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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTodo = exports.getTodos = void 0;
const models_1 = require("./models");
const _1 = require(".");
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    _1.db.connectDB();
    const posts = yield models_1.Todo.find();
    return posts;
});
exports.getTodos = getTodos;
const postTodo = () => {
    _1.db.connectDB();
    return 1;
};
exports.postTodo = postTodo;

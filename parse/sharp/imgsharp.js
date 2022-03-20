"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const sharpImage = (height, width, orig_path, new_path) => {
    return (0, sharp_1.default)(orig_path).resize(width, height).toFile(new_path);
};
exports.default = sharpImage;

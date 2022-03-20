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
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const routes = express_1.default.Router();
const path_1 = __importDefault(require("path"));
const imgsharp_1 = __importDefault(require("../sharp/imgsharp"));
routes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let name = req.query.filename;
        let height = Number(req.query.height);
        let width = Number(req.query.width);
        if (!height || !name || !width || height <= 0 || width <= 0) {
            res
                .status(400)
                .send('Error pls provide correct filename, height and width for Example http://localhost:3000/images?filename=fjord&height=100&width=200');
            return;
        }
        const orig_image = `${path_1.default.resolve(__dirname, `./../../Photos/original_images/${name}.jpg`)}`;
        const new_path = `${path_1.default.resolve(__dirname, `./../../Photos/resized_images/${name}_${height}*${width}.jpg`)}`;
        if (fs_1.default.existsSync(new_path)) {
            res.sendFile(new_path);
        }
        else {
            yield (0, imgsharp_1.default)(height, width, orig_image, new_path);
            res.sendFile(new_path);
        }
    }
    catch (error) {
        res
            .status(500)
            .send('Error occured while fetching image or No such file exist 500 pls enter correct filename');
    }
}));
exports.default = routes;

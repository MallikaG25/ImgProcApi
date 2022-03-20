"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const _1 = __importDefault(require("./routes/."));
const app = (0, express_1.default)();
const port = 3000;
app.use('/images', _1.default);
app.get('/', (req, res) => {
    res
        .status(200)
        .send('<h2>Welcome Image processing Api</h2><p>pls right in url the size you want for image Example: http://localhost:3000/images?filename=fjord&height=200&width=200</p>');
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
exports.default = app;

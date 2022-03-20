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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("./../../index"));
const supertest_2 = __importDefault(require("supertest"));
(0, supertest_1.default)(index_1.default);
describe('GET /', function () {
    it('server when respond with 200', () => __awaiter(this, void 0, void 0, function* () {
        yield (0, supertest_2.default)(index_1.default).get('/').expect(200);
    }));
});
describe('GET /images', () => {
    it('server when respond with 200', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_2.default)(index_1.default)
            .get('/images?filename=fjord&height=100&width=200')
            .expect(200);
    }));
});
describe('GET /images', () => {
    it('server when respond with 500 when file not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, supertest_2.default)(index_1.default)
            .get('/images?filename=anything&height=100&width=200')
            .expect(500);
    }));
});

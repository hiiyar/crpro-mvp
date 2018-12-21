"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const config_1 = require("@crpro/config");
const querystring = require("querystring");
class ClashApiService {
    constructor() {
        this.instance = axios_1.default.create({
            baseURL: "https://api.clashroyale.com/v1/",
            headers: {
                authorization: `Bearer ${config_1.API_KEY}`
            }
        });
    }
    getCards() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.instance
                .get("cards")
                .then(r => {
                return r.data.items;
            })
                .catch(e => {
                console.log(e.message);
                return [];
            });
        });
    }
    getPlayer(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.instance
                .get(`players/${tag}`)
                .then(r => r.data)
                .catch(e => {
                console.log(e.message);
                return null;
            });
        });
    }
    getTournaments(query) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(query);
            return this.instance
                .get(`tournaments?${querystring.stringify(query)}`)
                .then(r => r.data.items)
                .catch(e => {
                console.log(e.message);
                return [];
            });
        });
    }
    getTournamentByTag(tag) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`url: tournaments/${tag}`);
            return this.instance
                .get(`tournaments/${encodeURIComponent(tag)}`)
                .then(r => r.data)
                .catch(e => {
                console.log(e.message);
                return null;
            });
        });
    }
}
exports.ClashApiService = ClashApiService;
//# sourceMappingURL=cr-service.js.map
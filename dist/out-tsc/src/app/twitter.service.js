"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_1 = require("../environments/environment");
var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
    }
    TwitterService.prototype.user = function () {
        return this.http.get(environment_1.environment.api + "/user");
    };
    TwitterService.prototype.home = function (since) {
        return this.http.get(environment_1.environment.api + "/home?since=" + since);
    };
    TwitterService.prototype.action = function (property, id, state) {
        return this.http.post(environment_1.environment.api + "/" + property + "/" + id, { state: state });
    };
    TwitterService.prototype.search = function () {
        return this.http.get(environment_1.environment.api + "/search/sahniarun");
    };
    TwitterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TwitterService);
    return TwitterService;
}());
exports.TwitterService = TwitterService;
//# sourceMappingURL=twitter.service.js.map
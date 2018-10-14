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
var tweet_1 = require("../tweet");
var TweetComponent = /** @class */ (function () {
    function TweetComponent() {
        this.action = new core_1.EventEmitter();
    }
    TweetComponent.prototype.hasPhoto = function (tweet) {
        if (tweet.entities.media
            && tweet.entities.media.length
            && tweet.entities.media[0].type === 'photo') {
            return true;
        }
        return false;
    };
    TweetComponent.prototype.toggleAction = function (property) {
        this.action.emit({ property: property, tweet: this.tweet });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", tweet_1.Tweet)
    ], TweetComponent.prototype, "tweet", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", tweet_1.Tweet)
    ], TweetComponent.prototype, "retweet", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TweetComponent.prototype, "action", void 0);
    TweetComponent = __decorate([
        core_1.Component({
            selector: 'app-tweet',
            templateUrl: './tweet.component.html',
            styleUrls: ['./tweet.component.scss']
        })
    ], TweetComponent);
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;
//# sourceMappingURL=tweet.component.js.map
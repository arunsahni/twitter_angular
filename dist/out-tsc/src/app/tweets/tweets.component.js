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
var twitter_service_1 = require("../twitter.service");
var TweetsComponent = /** @class */ (function () {
    function TweetsComponent(twitter) {
        this.twitter = twitter;
        this.inflight = false;
        this.tweets = [];
        this.ids = [];
        this.since = '';
    }
    TweetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTweets();
        this.search();
        this.timer = setInterval(function () { return _this.getTweets(); }, 61000);
    };
    TweetsComponent.prototype.ngOnDestroy = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    TweetsComponent.prototype.getTweets = function () {
        var _this = this;
        this.twitter.home(this.since).subscribe(function (tweets) {
            tweets.data.reverse().forEach(function (tweet) {
                if (_this.ids.indexOf(tweet.id_str) < 0) {
                    _this.ids.push(tweet.id_str);
                    _this.tweets.unshift(tweet);
                }
            });
            _this.since = _this.tweets[0].id_str;
            _this.cleanUp();
        });
    };
    TweetsComponent.prototype.search = function () {
        this.twitter.search().subscribe(function (res) {
            console.log(res);
        });
    };
    TweetsComponent.prototype.cleanUp = function () {
        if (this.tweets.length > 1000) {
            this.tweets.splice(1000);
            this.ids.splice(1000);
        }
    };
    TweetsComponent.prototype.action = function (action, index) {
        var _this = this;
        if (this.inflight) {
            return;
        }
        var stateKey = action.property === 'favorite' ? 'favorited' : 'retweeted';
        var newState = !action.tweet[stateKey];
        this.inflight = true;
        this.twitter.action(action.property, action.tweet.id_str, newState).subscribe(function (tweet) {
            _this.tweets[index][stateKey] = newState;
            _this.tweets[index][action.property + '_count'] += newState ? 1 : -1;
            _this.inflight = false;
        });
    };
    TweetsComponent = __decorate([
        core_1.Component({
            selector: 'app-tweets',
            templateUrl: './tweets.component.html',
            styleUrls: ['./tweets.component.scss']
        }),
        __metadata("design:paramtypes", [twitter_service_1.TwitterService])
    ], TweetsComponent);
    return TweetsComponent;
}());
exports.TweetsComponent = TweetsComponent;
//# sourceMappingURL=tweets.component.js.map
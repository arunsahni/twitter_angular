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
var platform_browser_1 = require("@angular/platform-browser");
var TweetPipe = /** @class */ (function () {
    function TweetPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    TweetPipe.prototype.transform = function (tweet, args) {
        var text = this.sanitizer.sanitize(core_1.SecurityContext.NONE, tweet.full_text);
        // Replace screen names with links
        if (tweet.entities.user_mentions) {
            tweet.entities.user_mentions.forEach(function (mention) {
                text = text.replace(new RegExp("@" + mention.screen_name, 'gi'), "<a href=\"https://twitter.com/" + mention.screen_name + "\" target=\"_blank\">@" + mention.screen_name + "</a>");
            });
        }
        // Replace links with clickable links
        if (tweet.entities.urls) {
            tweet.entities.urls.forEach(function (url) {
                text = text.replace(url.url, "<a href=\"" + url.url + "\" target=\"_blank\">" + url.display_url + "</a>");
            });
        }
        // Remove media urls since we display them
        if (tweet.entities.media) {
            tweet.entities.media.forEach(function (url) {
                text = text.replace(url.url, '');
            });
        }
        // Replace newline characters
        text = text.replace(/\n/gm, '<br />');
        return this.sanitizer.bypassSecurityTrustHtml(text);
    };
    TweetPipe = __decorate([
        core_1.Pipe({
            name: 'tweet'
        }),
        __metadata("design:paramtypes", [platform_browser_1.DomSanitizer])
    ], TweetPipe);
    return TweetPipe;
}());
exports.TweetPipe = TweetPipe;
//# sourceMappingURL=tweet.pipe.js.map
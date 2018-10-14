"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tweet_pipe_1 = require("./tweet.pipe");
var tweets = require('../assets/tweets.spec.json');
var Sanitizer = /** @class */ (function () {
    function Sanitizer() {
    }
    Sanitizer.prototype.bypassSecurityTrustHtml = function (text) {
        return text;
    };
    return Sanitizer;
}());
;
fdescribe('TweetPipe', function () {
    var pipe, sanitizer;
    beforeEach(function () {
        sanitizer = new Sanitizer();
        pipe = new tweet_pipe_1.TweetPipe(sanitizer);
    });
    it('create an instance', function () {
        expect(pipe).toBeTruthy();
    });
    it('should process URLs', function () {
        expect(pipe.transform(tweets.url)).toContain("<a href=\"https://t.co/dnF7CwsmGf\" target=\"_blank\">sb.gl/2FvQD88</a>");
    });
    it('should process mentions', function () {
        console.log(pipe.transform(tweets.mentions));
        expect(pipe.transform(tweets.mentions)).toContain("<a href");
    });
});
//# sourceMappingURL=tweet.pipe.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var twitter_service_1 = require("./twitter.service");
describe('TwitterService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [twitter_service_1.TwitterService]
        });
    });
    it('should be created', testing_1.inject([twitter_service_1.TwitterService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=twitter.service.spec.js.map
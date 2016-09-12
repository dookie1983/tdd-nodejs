var request = require("request");
var express = require('express');
var expect  = require("chai").expect;
var app = express();
var base_url = "http://localhost:3000/";
describe("Hello world API spec", function() {
    describe("GET /", function() {
        it("should returns status code 200", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });

        });

        it("should returns Phongsak Ritpitakphong", function(done) {
            request.get(base_url, function(error, response, body) {
                expect(body).to.equal("Phongsak Ritpitakphong");
                done();
            });
        });
    });
});

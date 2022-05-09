const request = require("supertest");
const app = require("../app");

// making a GET request to the app
describe("GET /", () => {
    it("App working correctly", (done) => {
        request(app).get("/").expect("I am in the game!", done);
    })
});
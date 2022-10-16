"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var api_1 = require("@waykit/api");
var ExampleRequest_1 = require("./ExampleRequest");
var ExampleAPI_1 = require("./ExampleAPI");
var client = new api_1.ApiClient("http://localhost:3000/", axios_1["default"]);
var request = new ExampleRequest_1["default"]({
  Data: "test",
});
// Example call;
client
  .request(new ExampleAPI_1.ExampleAPI.FetchExample(request))
  .then(function (response) {
    console.log(response);
  })
  ["catch"](function (error) {
    console.log(error);
  });

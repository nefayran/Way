"use strict";
exports.__esModule = true;
exports.ExampleAPI = void 0;
var api_1 = require("@waykit/api");
var ExampleAPI;
(function (ExampleAPI) {
  var FetchExample = /** @class */ (function () {
    function FetchExample(params) {
      this.params = params;
      this.method = api_1.HttpMethod.GET;
      this.auth = {
        authorize: false,
        token: {
          value: "test",
          type: "Bearer",
        },
      };
      this.parse = function (data) {
        return data.data;
      };
      this.path = "test/example";
      this.auth.authorize = false;
    }
    return FetchExample;
  })();
  ExampleAPI.FetchExample = FetchExample;
})((ExampleAPI = exports.ExampleAPI || (exports.ExampleAPI = {})));

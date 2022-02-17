import axios from "axios";
import { ApiClient } from "@waykit/api";
import ExampleRequest from "./ExampleRequest";
import { ExampleAPI } from "./ExampleAPI";

const client = new ApiClient("http://localhost:3000/", axios);

const request: ExampleRequest = new ExampleRequest({
  Data: "test",
});

// Example call;
client
  .request(new ExampleAPI.FetchExample(request))
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

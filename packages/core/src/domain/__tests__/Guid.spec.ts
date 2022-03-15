import Guid from "../GUID/Guid";

describe("Guid", () => {
  test("generate", async () => {
    const guid = new Guid();
    expect(guid.toString().length).toBe(
      "xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx".length
    );
  });
});

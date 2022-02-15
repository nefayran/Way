import { mount } from "@vue/test-utils";
import WRow from "../WRow";

describe("WRow.ts", () => {
  test("should have an w-row class", () => {
    const wrapper = mount(WRow, {
      propsData: {
        row: "2",
      },
    });
    expect(wrapper.classes()).toContain("w-row");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

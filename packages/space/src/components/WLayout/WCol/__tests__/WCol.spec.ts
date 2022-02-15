import { mount } from "@vue/test-utils";
import WCol from "../WCol";

describe("WCol.ts", () => {
  test("should have an w-col class", () => {
    const wrapper = mount(WCol, {
      propsData: {
        col: "2",
      },
    });
    expect(wrapper.classes()).toContain("w-col");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

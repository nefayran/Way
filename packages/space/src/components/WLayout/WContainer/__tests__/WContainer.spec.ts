import { mount } from "@vue/test-utils";
import WContainer from "../WContainer";

describe("WContainer.ts", () => {
  test("should have an w-container class", () => {
    const wrapper = mount(WContainer, {
      propsData: {
        size: "lg",
      },
    });
    expect(wrapper.classes()).toContain("w-container");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

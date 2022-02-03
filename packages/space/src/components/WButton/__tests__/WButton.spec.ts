import { mount } from "@vue/test-utils";
import WButton from "../WButton.vue";

describe("WButton.vue", () => {
  test("should have an w-button class", () => {
    const wrapper = mount(WButton, {
      propsData: {
        theme: "light",
      },
    });
    expect(wrapper.classes()).toContain("w-button");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

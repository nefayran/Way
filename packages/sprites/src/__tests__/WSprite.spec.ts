import { mount } from "@vue/test-utils";
import WSprite from "../WSprite.vue";

describe("WSprite.vue", () => {
  test("should have an w-sprite class", () => {
    const wrapper = mount(WSprite, {
      propsData: {
        prefix: "test",
        name: "color",
        color: "#fff",
        width: "50",
        height: "60",
      },
    });
    expect(wrapper.classes()).toContain("w-sprite");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

import { mount } from "@vue/test-utils";
import WInput from "../WInput.vue";

describe("WInput.vue", () => {
  test("should have an w-input class", () => {
    const wrapper = mount(WInput, {
      propsData: {
        modelValue: "test",
      },
    });
    expect(wrapper.classes()).toContain("w-input");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

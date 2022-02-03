import { mount } from "@vue/test-utils";
import ComponentsContainer from "../ComponentsContainer.vue";

describe("ComponentsContainer.vue", () => {
  test("should have an wb-container class", () => {
    const wrapper = mount(ComponentsContainer, {});
    expect(wrapper.classes()).toContain("wb-container");
    expect(wrapper.element).toMatchSnapshot();
  });
});

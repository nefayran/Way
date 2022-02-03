import { mount } from "@vue/test-utils";
import MainContainer from "../MainContainer.vue";

describe("MainContainer.vue", () => {
  test("should have an wb-container class", () => {
    const wrapper = mount(MainContainer, {});
    expect(wrapper.classes()).toContain("wb-container");
    expect(wrapper.element).toMatchSnapshot();
  });
});

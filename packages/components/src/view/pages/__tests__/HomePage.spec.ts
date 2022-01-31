import { mount } from "@vue/test-utils";
import HomePage from "../HomePage.vue";

describe("MainContainer.vue", () => {
  test("should have an wb-container class", () => {
    const wrapper = mount(HomePage, {});
    expect(wrapper.classes()).toContain("wb-page");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

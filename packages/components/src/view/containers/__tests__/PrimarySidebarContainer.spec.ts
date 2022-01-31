import { mount } from "@vue/test-utils";
import PrimarySidebarContainer from "../PrimarySidebarContainer.vue";

describe("PrimarySidebarContainer.vue", () => {
  test("should have an wb-container class", () => {
    const wrapper = mount(PrimarySidebarContainer, {});
    expect(wrapper.classes()).toContain("wb-container");
    expect(wrapper.element).toMatchSnapshot();
  });
  test("generate components list", () => {
    const wrapper = mount(PrimarySidebarContainer, {});
    expect(wrapper.classes()).toContain("wb-container");
    expect(wrapper.element).toMatchSnapshot();
  });
});

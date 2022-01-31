import { mount } from "@vue/test-utils";
import SecondarySidebarContainer from "../SecondarySidebarContainer.vue";

describe("SecondarySidebarContainer.vue", () => {
  test("should have an wb-container class", () => {
    const wrapper = mount(SecondarySidebarContainer, {});
    expect(wrapper.classes()).toContain("wb-container");
    expect(wrapper.element).toMatchSnapshot();
  });
  test("generate components list", () => {
    const wrapper = mount(SecondarySidebarContainer, {});
    expect(wrapper.classes()).toContain("wb-container");
    expect(wrapper.element).toMatchSnapshot();
  });
});

import { mount } from "@vue/test-utils";
import WApp from "../WApp.vue";

describe("WApp.vue", () => {
  test("should have an w-app class", () => {
    const wrapper = mount(WApp, {});
    expect(wrapper.classes()).toContain("w-app");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

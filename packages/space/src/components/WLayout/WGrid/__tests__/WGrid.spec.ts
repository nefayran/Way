import { mount } from "@vue/test-utils";
import WGrid from "../WGrid";

describe("WGrid.vue", () => {
  test("should have an w-grid class", () => {
    const wrapper = mount(WGrid, {
      propsData: {
        cols: "6",
      },
    });
    expect(wrapper.classes()).toContain("w-grid");
    expect(wrapper.html()).toMatchSnapshot();
  });
});

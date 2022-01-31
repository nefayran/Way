import { defineAsyncComponent, Component } from "vue";
import WBComponentList from "@/app/logic/WBComponentList";

describe("WBComponentList", () => {
  const wbComponentList = new WBComponentList();
  test("get component list array", () => {
    const components = wbComponentList.getComponents();
    expect(Array.isArray(components)).toBe(true);
  });

  test("test component in list array", () => {
    const components = wbComponentList.getComponents();
    let resolve: (comp: Component) => void;
    const expected: Component = defineAsyncComponent({
      loader: () =>
        new Promise((r) => {
          resolve = r as any;
        }),
      loadingComponent: () => "loading",
      delay: 1, // defaults to 200
    });
    const { component } = components[0];
    const received: Component = component || {};
    expect(received.name).toEqual(expected.name);
  });

  test("test props in list array it's promise", async () => {
    const components = wbComponentList.getComponents();
    const received = components[0].props;
    expect(received).toEqual(new Promise(() => {}));
  });
});

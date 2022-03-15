import { defineAsyncComponent, markRaw } from "vue";
import { Components } from "@/components/index";

export interface IWBComponent {
  name: string;
  component?: object;
  props?: Promise<Array<any>>;
}

export default class WBComponentList {
  list: Array<IWBComponent>;

  constructor() {
    this.list = [];
  }

  /* Get component list */
  getComponents() {
    Object.keys(Components).forEach((key: string) => {
      this.list.push(<IWBComponent>{
        name: key,
        // Async component
        component: markRaw(defineAsyncComponent(Components[key])),
        props: Components[key]().then((result: any) => {
          return result.default.props;
        }),
      });
    });
    return this.list;
  }
}

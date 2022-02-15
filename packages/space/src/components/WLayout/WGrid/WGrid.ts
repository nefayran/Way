import { computed, h, defineComponent } from "vue";

export default defineComponent({
  name: "WGrid",

  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false,
    },
    rows: {
      type: [Boolean, String, Number],
      default: false,
    },
    tag: {
      type: String,
      default: "div",
    },
  },

  setup(props, { slots }) {
    const classes = computed(() => {
      const classList: any[] = [];

      classList.push({
        [`cols-${props.cols}`]: props.cols,
        [`rows-${props.rows}`]: props.rows,
      });

      return classList;
    });

    return () =>
      h(
        props.tag,
        {
          class: ["w-grid grid", classes.value],
        },
        slots.default?.()
      );
  },
});

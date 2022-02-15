import { computed, h, defineComponent } from "vue";

export default defineComponent({
  name: "WCol",

  props: {
    col: {
      type: [Boolean, String, Number],
      default: 1,
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
        [`col-${props.col}`]: props.col,
      });

      return classList;
    });

    return () =>
      h(
        props.tag,
        {
          class: ["w-col col", classes.value],
        },
        slots.default?.()
      );
  },
});

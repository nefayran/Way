import { computed, h, defineComponent } from "vue";

export default defineComponent({
  name: "WContainer",

  props: {
    size: {
      type: [Boolean, String],
      default: "fluid",
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
        [`container-${props.size}`]: props.size,
      });

      return classList;
    });

    return () =>
      h(
        props.tag,
        {
          class: ["w-container", classes.value],
        },
        slots.default?.()
      );
  },
});

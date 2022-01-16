declare const _default: import("vue").DefineComponent<{
    text: {
        type: import("vue").PropType<string>;
        required: true;
    } & {
        default: string;
    };
    color: {
        type: import("vue").PropType<string>;
        required: true;
    } & {
        default: string;
    };
    size: {
        type: import("vue").PropType<string>;
    } & {
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    text?: unknown;
    color?: unknown;
    size?: unknown;
} & {
    color: string;
    text: string;
    size: string;
} & {}>, {
    color: string;
    text: string;
    size: string;
}>;
export default _default;

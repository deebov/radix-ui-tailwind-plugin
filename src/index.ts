import plugin from "tailwindcss/plugin";

const states = [
    "open",
    "closed",
    "visible",
    "hidden",
    "on",
    "off",
    "checked",
    "unchecked",
    "indeterminate",
    "complete",
    "loading",
    "delayed-open",
    "instant-open",
];
const orientations = ["horizontal", "vertical"];
const sides = ["left", "right", "bottom", "top"];
const aligns = ["start", "end", "center"];
const motions = ["to-start", "to-end", "from-start", "from-end"];
const swipes = ["start", "move", "cancel", "end"];
const swipeDirections = ["up", "down", "left", "right"];

const dataVariants = [
    {
        name: "side",
        variants: sides,
    },
    {
        name: "align",
        variants: aligns,
    },
    {
        name: "motion",
        variants: motions,
    },
    {
        name: "swipe",
        variants: swipes,
    },
    {
        name: "swipe-direction",
        variants: swipeDirections,
    },
];

const booleanVariants = ["active", "disabled", "highlighted", "placeholder"];

interface Options {
    /**
     * The prefix used for the variants. This defaults to `radix`.
     *
     * Usage example:
     * ```html
     *  <div class="radix-open:underline"></div>
     *  ```
     **/
    prefix?: string;
}

export = plugin.withOptions<Options>(({ prefix = "radix" } = {}) => {
    return ({ addVariant }) => {
        // States. e.g. `radix-open:opacity-100` `radix-not-unchecked:opacity-100`
        for (let state of states) {
            addVariant(`${prefix}-${state}`, [`&[data-state~="${state}"]`, `:where([data-state~="${state}"]) &`]);

            addVariant(`${prefix}-not-${state}`, [
                `&[data-state]:not([data-state~="${state}"])`,
                `:where([data-state]:not([data-state~="${state}"])) &:not([data-state])`,
            ]);
        }

        // Orientations. e.g. `radix-horizontal:flex-col` `radix-vertical:flex-row`
        for (let orientation of orientations) {
            addVariant(`${prefix}-${orientation}`, [
                `&[data-orientation~="${orientation}"]`,
                `:where([data-orientation~="${orientation}"]) &`,
            ]);
        }

        // Data variants. e.g. `radix-side-left:ml-0` `radix-side-right:mr-0`
        for (let { name, variants } of dataVariants) {
            for (let variant of variants) {
                addVariant(`${prefix}-${name}-${variant}`, [
                    `&[data-${name}~="${variant}"]`,
                    `:where([data-${name}~="${variant}"]) &`,
                ]);
            }
        }

        // Booleans. e.g. `radix-active:underline` `radix-disabled:opacity-50`
        for (let variant of booleanVariants) {
            addVariant(`${prefix}-${variant}`, [`&[data-${variant}="true"]`, `:where([data-${variant}="true"]) &`]);
        }
    };
});

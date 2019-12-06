// JSX/React specific lint rules
// https://github.com/yannickcr/eslint-plugin-react
// https://facebook.github.io/react/

const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
    rules: {
        "react/forbid-prop-types": [ERROR, {forbid: ["array", "object"]}],
        "react/jsx-no-duplicate-props": ERROR,
        // This triggers a ton on stuff like 'if (window.x) { x(...) }'.
        "react/jsx-no-undef": ERROR,
        "react/jsx-uses-react": ERROR,
        "react/jsx-uses-vars": ERROR,
        "react/no-did-mount-set-state": [ERROR],
        "react/no-did-update-set-state": ERROR,
        "react/no-direct-mutation-state": ERROR,
        "react/prop-types": ERROR,
        "react/self-closing-comp": ERROR,
        "react/sort-comp": [
            ERROR,
            {
                // TODO(kevinb): specify where "constructor" should go
                order: [
                    "type-annotations",
                    "static-methods",
                    "lifecycle",
                    "everything-else",
                    "render",
                ],
            },
        ],
        "react/no-unsafe": WARN,
        "react/no-deprecated": WARN,
        // TODO(riley): Introduce this rule once we upgrade to >= 2.0.0.
        // "template-curly-spacing": ERROR,
        // ---------------------------------------
        // ES6/jsx stuff we explicitly disable.
        // We turned this off since it was too much work for too
        // little benefit, especially for one-line props.
        "react/jsx-sort-props": OFF,
        // We turned this off too as we didn't see an explicit benefit
        "react/sort-prop-types": OFF,
    },
    extends: ["prettier/react"],
    plugins: ["react"],
    settings: {
        react: {
            version: "16.3",
        },
    },
};

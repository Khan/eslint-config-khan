// Flow static typing lint rules
// https://github.com/gajus/eslint-plugin-flowtype
// https://flowtype.org/

const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
    rules: {
        "flowtype/boolean-style": [ERROR, "boolean"],
        "flowtype/define-flow-type": "warn", // suppress no-undef on flow types
        "flowtype/no-dupe-keys": ERROR,

        // Use Flow's version of no-unused-expressions
        "flowtype/no-unused-expressions": [
            2,
            {allowShortCircuit: true, allowTernary: true},
        ],
        "no-unused-expressions": OFF, // Disable this rule as flowtype/no-unused-expression supersedes it

        "flowtype/no-weak-types": OFF, // allow 'any' for now
        // flow may still require parameter types in certain situations
        "flowtype/require-parameter-type": OFF,
        "flowtype/require-return-type": OFF,
        "flowtype/require-valid-file-annotation": [
            ERROR,
            "always",
            {
                annotationStyle: "line",
            },
        ],
        "flowtype/sort": "",
        "flowtype/type-id-match": OFF,
        "flowtype/use-flow-type": WARN, // suppress no-unused-vars on flow types
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
    },
    extends: ["prettier/flowtype"],
    plugins: ["flowtype"],
};

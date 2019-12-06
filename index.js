const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
    parser: "babel-eslint",
    plugins: ["flowtype", "jsx-a11y", "prettier", "react"],
    extends: [
        "eslint:recommended",
        "prettier",
        "prettier/flowtype",
        "prettier/react",
    ],
    env: {
        // TODO(csilvers): once we properly use node.js for node
        // files, get rid of this next line.
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    settings: {
        flowtype: {
            onlyFilesWithFlowAnnotation: true,
        },
        react: {
            version: "16.3", // TODO(kevinb): update to 16.4
        },
    },
    rules: {
        /**
         * built-in rules
         */
        "arrow-parens": OFF, // we've decided explicitly not to care about this.
        "constructor-super": ERROR,
        camelcase: [
            ERROR,
            {
                properties: "never", // We'd possibly like to remove the 'properties': 'never' one day.
                allow: ["^UNSAFE_"],
            },
        ],
        curly: ERROR,
        eqeqeq: [ERROR, "allow-null"],
        "guard-for-in": ERROR,
        "linebreak-style": [ERROR, "unix"],
        "max-lines": [ERROR, 1000],
        "no-alert": ERROR,
        "no-array-constructor": ERROR,
        "no-case-declarations": OFF, // TODO(kevinb): enable this
        "no-console": ERROR,
        "no-const-assign": ERROR,
        "no-debugger": ERROR,
        "no-dupe-class-members": ERROR,
        "no-dupe-keys": ERROR,
        "no-extra-bind": ERROR,
        "no-new-func": ERROR,
        "no-new-object": ERROR,
        "no-new": ERROR,
        "no-this-before-super": ERROR,
        "no-throw-literal": ERROR,
        "no-undef": ERROR,
        "no-unexpected-multiline": ERROR,
        "no-unreachable": ERROR,
        "no-unused-expressions": OFF, // superseded by flowtype/no-unused-expressions
        "no-unused-vars": [ERROR, {args: "none", varsIgnorePattern: "^_*$"}],
        "no-useless-call": ERROR,
        "no-var": ERROR,
        "no-with": ERROR,
        "one-var": [ERROR, "never"],
        "prefer-arrow-callback": OFF, // TODO(kevinb): enable this and then disable it in webapp
        "prefer-const": ERROR,
        "prefer-spread": ERROR,
        "prefer-template": OFF, // it complains when you have a multi-line string, which is going too far.
        "require-jsdoc": OFF, // adding jsdocs to everything is overly burdensome
        "template-curly-spacing": OFF, // TODO(kevinb): enable this
        "valid-jsdoc": OFF, // TODO(kevinb): enable this since we are using jdocs in some places

        /**
         * flowtype rules
         */
        "flowtype/boolean-style": [ERROR, "boolean"],
        "flowtype/define-flow-type": WARN, // suppress no-undef on flow types
        "flowtype/no-dupe-keys": ERROR,
        "flowtype/no-unused-expressions": [
            ERROR,
            {allowShortCircuit: true, allowTernary: true},
        ],
        "flowtype/no-weak-types": OFF, // allow 'any' for now
        "flowtype/require-parameter-type": OFF, // flow may still require parameter types in certain situations
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

        /**
         * jsx-a11y rules
         */
        "jsx-a11y/alt-text": ERROR,
        "jsx-a11y/aria-props": ERROR,
        "jsx-a11y/aria-role": [ERROR, {ignoreNonDOM: true}],
        "jsx-a11y/anchor-is-valid": ERROR,

        /**
         * prettier rules
         */
        "prettier/prettier": ["error", require("./.prettierrc.js")],

        /**
         * react rules
         */
        "react/forbid-prop-types": [ERROR, {forbid: ["array", "object"]}],
        "react/jsx-no-duplicate-props": ERROR,
        "react/jsx-no-undef": ERROR,
        "react/jsx-sort-props": OFF, // too much work for too little benefit
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
        "react/sort-prop-types": OFF, // not explicit benefit
        "react/no-unsafe": WARN,
        "react/no-deprecated": WARN,
    },
};

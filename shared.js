// These are rules that are shared by all our javascript, no matter
// where it is written (in webapp javascript files, inside html
// <script> tags, in node.js scripts).
//
// In particular, there are NO ES6 OR ES7 rules here, since browsers
// do not support them yet.  Look in index.js for those rules instead.
//
// This rc file is not meant to be used directly; rather it is extended
// by the user-facing files index.js, browser.js, and node.js.

const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
    rules: {
        // We'd possibly like to remove the 'properties': 'never' one day.
        camelcase: [
            ERROR,
            {
                properties: "never",
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
        "no-console": ERROR,
        "no-debugger": ERROR,
        "no-dupe-class-members": ERROR,
        "no-dupe-keys": ERROR,
        "no-extra-bind": ERROR,
        "no-new": ERROR,
        "no-new-func": ERROR,
        "no-new-object": ERROR,
        "no-throw-literal": ERROR,
        "no-undef": ERROR,
        "no-unexpected-multiline": ERROR,
        "no-unreachable": ERROR,
        // NOTE: If you change the options here, be sure to update flow.js also
        "no-unused-expressions": [
            ERROR,
            {allowShortCircuit: true, allowTernary: true},
        ],
        "no-unused-vars": [ERROR, {args: "none", varsIgnorePattern: "^_*$"}],
        "no-useless-call": ERROR,
        "no-with": ERROR,
        "one-var": [ERROR, "never"],
        "jsx-a11y/alt-text": ERROR,
        "jsx-a11y/aria-props": ERROR,
        "jsx-a11y/aria-role": [ERROR, {ignoreNonDOM: true}],
        "jsx-a11y/anchor-is-valid": ERROR,
        // TODO(scottgrant): Add additional a11y rules as we support them.
        // ---------------------------------------
        // Stuff that's disabled for now, but maybe shouldn't be.
        // TODO(jeresig): It's an anti-pattern but it appears to be used
        // frequently in reducers, the alternative would be super-clunky.
        "no-case-declarations": OFF,
        // TODO(csilvers): enable these if/when community agrees on it.
        // Might be nice to turn this on one day, but since we don't
        // use jsdoc anywhere it seems silly to require it yet.
        "valid-jsdoc": OFF,
        "require-jsdoc": OFF,
    },
    plugins: ["jsx-a11y", "prettier"],
    extends: ["eslint:recommended", "prettier"],
};

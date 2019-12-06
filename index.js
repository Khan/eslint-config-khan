// These are rules that apply to javascript files, particularly for
// KA webapp.  These files use ES6 constructs, which get transpiled
// down to ES5 before deploying.  They are also often jsx files.
// They also allow a lot of globals because they use third-party
// packages that expose globals, or for backwards-compatibility
// reasons.
//
// If you want to adjust/add a rule that is not ES6-, flow-, or jsx-specific,
// modify shared.js instead.  In particular, when adjusting the
// list of built-in globals (useful for both javascript files and
// <script> contents inside html), do that in shared.js.

const OFF = "off";
const WARN = "warn";
const ERROR = "error";

module.exports = {
    rules: {
        // ---------------------------------------
        // ES6 rules.
        "constructor-super": ERROR,
        "no-const-assign": ERROR,
        "no-this-before-super": ERROR,
        "no-var": ERROR,
        "prefer-const": ERROR,
        "prefer-spread": ERROR,
        // We turned this off because it complains when you have a
        // multi-line string, which I think is going too far.
        "prefer-template": OFF,
        // We've decided explicitly not to care about this.
        "arrow-parens": OFF,
        // ---------------------------------------
        // ES6/jsx stuff that's disabled for now, but maybe shouldn't be.
        // TODO(csilvers): enable these if/when community agrees on it.
        "prefer-arrow-callback": OFF,
        "prettier/prettier": ["error", require("./.prettierrc.js")],
    },
    parser: "babel-eslint",
    env: {
        // TODO(csilvers): once we properly use node.js for node
        // files, get rid of this next line.
        node: true,
        browser: true,
        es6: true,
        jest: true,
    },
    extends: ["./shared.js", "./flow.js", "./react.js"],
};

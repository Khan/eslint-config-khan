// JSX/React specific lint rules
// https://github.com/yannickcr/eslint-plugin-react
// https://facebook.github.io/react/
module.exports = {
    "rules": {
        "react/forbid-prop-types": [2, { "forbid": [ "array", "object" ] }],
        "react/jsx-no-duplicate-props": 2,
        // This triggers a ton on stuff like 'if (window.x) { x(...) }'.
        "react/jsx-no-undef": 2,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-did-mount-set-state": [2],
        "react/no-did-update-set-state": 2,
        "react/no-direct-mutation-state": 2,
        "react/prop-types": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": [2, {
            // TODO(kevinb): specify where "constructor" should go
            "order": [
                "type-annotations",
                "static-methods",
                "lifecycle",
                "everything-else",
                "render"
            ]
        }],
        "react/no-unsafe": 1,
        "react/no-deprecated": 1,
        // TODO(riley): Introduce this rule once we upgrade to >= 2.0.0.
        // "template-curly-spacing": 2,
        // ---------------------------------------
        // ES6/jsx stuff we explicitly disable.
        // We turned this off since it was too much work for too
        // little benefit, especially for one-line props.
        "react/jsx-sort-props": 0,
        // We turned this off too as we didn't see an explicit benefit
        "react/sort-prop-types": 0,
    },
    "extends": [
        "prettier/react"
    ],
    "plugins": [
        "react"
    ],
    "settings": {
        "react": {
            "version": "16.3"
        }
    }
}

module.exports = {
  plugins: ["jsx-a11y"],
  rules: {
    // JSX a11y rules are taken from airbnb, not adjusted yet
    "jsx-a11y/alt-text": [
      "error",
      {
        area: [],
        elements: ["img", "object", "area", 'input[type="image"]'],
        img: [],
        'input[type="image"]': [],
        object: [],
      },
    ],

    "jsx-a11y/anchor-has-content": ["error", { components: [] }],

    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        aspects: ["noHref", "invalidHref", "preferButton"],
        components: ["Link"],
        specialLink: ["to"],
      },
    ],

    "jsx-a11y/aria-activedescendant-has-tabindex": "error",

    "jsx-a11y/aria-props": "error",

    "jsx-a11y/aria-proptypes": "error",

    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: false }],

    "jsx-a11y/aria-unsupported-elements": "error",

    "jsx-a11y/autocomplete-valid": [
      "off",
      {
        inputComponents: [],
      },
    ],

    "jsx-a11y/click-events-have-key-events": "error",

    "jsx-a11y/control-has-associated-label": [
      "error",
      {
        controlComponents: [],
        depth: 5,
        ignoreElements: [
          "audio",
          "canvas",
          "embed",
          "input",
          "textarea",
          "tr",
          "video",
        ],
        ignoreRoles: [
          "grid",
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "row",
          "tablist",
          "toolbar",
          "tree",
          "treegrid",
        ],
        labelAttributes: ["label"],
      },
    ],

    "jsx-a11y/heading-has-content": ["error", { components: [""] }],

    "jsx-a11y/html-has-lang": "error",

    "jsx-a11y/iframe-has-title": "error",

    "jsx-a11y/img-redundant-alt": "error",

    "jsx-a11y/interactive-supports-focus": "error",

    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        assert: "either",
        controlComponents: [],
        depth: 25,
        labelAttributes: [],
        labelComponents: [],
      },
    ],

    "jsx-a11y/lang": "error",

    "jsx-a11y/media-has-caption": [
      "error",
      {
        audio: [],
        track: [],
        video: [],
      },
    ],

    "jsx-a11y/mouse-events-have-key-events": "error",

    "jsx-a11y/no-access-key": "error",

    "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],

    "jsx-a11y/no-distracting-elements": [
      "error",
      {
        elements: ["marquee", "blink"],
      },
    ],

    "jsx-a11y/no-interactive-element-to-noninteractive-role": [
      "error",
      {
        tr: ["none", "presentation"],
      },
    ],

    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],

    "jsx-a11y/no-noninteractive-element-to-interactive-role": [
      "error",
      {
        li: ["menuitem", "option", "row", "tab", "treeitem"],
        ol: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
        table: ["grid"],
        td: ["gridcell"],
        ul: [
          "listbox",
          "menu",
          "menubar",
          "radiogroup",
          "tablist",
          "tree",
          "treegrid",
        ],
      },
    ],

    "jsx-a11y/no-noninteractive-tabindex": [
      "error",
      {
        roles: ["tabpanel"],
        tags: [],
      },
    ],

    "jsx-a11y/no-onchange": "off",

    "jsx-a11y/no-redundant-roles": "error",

    "jsx-a11y/no-static-element-interactions": [
      "error",
      {
        handlers: [
          "onClick",
          "onMouseDown",
          "onMouseUp",
          "onKeyPress",
          "onKeyDown",
          "onKeyUp",
        ],
      },
    ],

    "jsx-a11y/role-has-required-aria-props": "error",

    "jsx-a11y/role-supports-aria-props": "error",

    "jsx-a11y/scope": "error",

    "jsx-a11y/tabindex-no-positive": "error",

    "react/jsx-boolean-value": ["error", "never"],

    "react/jsx-curly-brace-presence": "error",

    // Js, jsx, tsx are all acceptable
    "react/jsx-filename-extension": "off",

    "react/jsx-fragments": "error",

    "react/jsx-handler-names": "off",

    // Airbnb says there can be false positives
    "react/jsx-key": "error",

    "react/jsx-max-depth": "off",

    "react/jsx-no-bind": ["error", { ignoreDOMComponents: true }],

    "react/jsx-no-comment-textnodes": "error",

    "react/jsx-no-constructed-context-values": "error",

    "react/jsx-no-duplicate-props": "error",

    // We'll use strict-boolean-expressions instead
    "react/jsx-no-leaked-render": "off",

    "react/jsx-no-literals": "off",

    "react/jsx-no-script-url": "error",

    "react/jsx-no-target-blank": "error",

    // Also checked by TypeScript
    "react/jsx-no-undef": "error",

    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],

    "react/jsx-pascal-case": ["error", { allowAllCaps: true }],

    "react/jsx-props-no-spreading": "off",

    "react/jsx-sort-default-props": "off",

    "react/jsx-sort-props": "off",

    "react/jsx-uses-react": "warn",

    "react/jsx-uses-vars": "warn",
  },
};

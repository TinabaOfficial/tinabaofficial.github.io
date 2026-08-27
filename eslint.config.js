import globals from "globals";
import js from "@eslint/js";
import eslintConfigEslint from "eslint-config-eslint";

export default [
    {
        ignores: ["docs/**", "node_modules/**"]
    },
    js.configs.recommended,
    ...eslintConfigEslint,
    {
        languageOptions: {
            globals: {
                ...globals.node
            },
            ecmaVersion: "latest",
            sourceType: "module"
        },
        rules: {
            "no-console": "off"
        }
    },
    {
        files: ["eslint.config.js", "eleventy.config.js"],
        rules: {
            "n/no-unpublished-import": "off"
        }
    },
    {
        files: ["src/assets/*.js"],
        languageOptions: {
            globals: {
                ...globals.browser
            }
        }
    }
];

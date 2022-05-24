import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from "@rollup/plugin-commonjs";
import eslint from '@rollup/plugin-eslint';
import typescript from "rollup-plugin-typescript2";
import babel from '@rollup/plugin-babel';
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';

const styledComponentsTransformer = createStyledComponentsTransformer({
    displayName: true,
});

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            peerDepsExternal(),
            commonjs(),
            typescript({
                useTsconfigDeclarationDir: true,
                transformers: [
                    () => ({
                        before: [styledComponentsTransformer],
                    }),
                ],
            }),
            postcss({
                extensions: ['.css'],
            }),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: "bundled",
                presets: ["@babel/preset-react", "@babel/preset-typescript"],
                plugins: ['babel-plugin-styled-components'],
            }),
            resolve(),
        ],
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
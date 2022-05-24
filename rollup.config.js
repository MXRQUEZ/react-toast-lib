import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from "@rollup/plugin-commonjs";
import eslint from '@rollup/plugin-eslint';
import typescript from "rollup-plugin-typescript2";
import typescript2 from "@rollup/plugin-typescript"
import babel from '@rollup/plugin-babel';
import dts from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import createStyledComponentsTransformer from 'typescript-plugin-styled-components';
import { terser } from "rollup-plugin-terser";

const styledComponentsTransformer = createStyledComponentsTransformer({
    displayName: true,
});

const isDev = () => !!process.argv.find(el => el === "--config-dev");

const packageJson = require("./package.json");

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: isDev(),
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: isDev(),
            },
        ],
        plugins: [
            eslint({
                fix: true,
            }),
            peerDepsExternal(),
            commonjs(),
            typescript({
                tsconfig: "tsconfig.json",
                transformers: [
                    () => ({
                        before: [styledComponentsTransformer],
                    }),
                ],
            }),
            typescript2({ tsconfig: "./tsconfig.json" }),
            postcss({
                extensions: ['.css'],
            }),
            babel({
                exclude: 'node_modules/**',
                babelHelpers: 'runtime',
                skipPreflightCheck: true,
                presets: ["@babel/preset-react", "@babel/preset-typescript", "@babel/preset-env"],
                plugins: ['babel-plugin-styled-components', "plugin-transform-runtime"],
            }),
            !isDev() ? terser() : null,
            resolve(),
        ],
        external: [/@babel\/runtime/]
    },
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
    },
];
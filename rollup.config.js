import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import typescript2 from "rollup-plugin-typescript2";
import alias from '@rollup/plugin-alias';
import replace from "@rollup/plugin-replace";
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
        ],
        plugins: [
            eslint({
                fix: true,
            }),
            isDev() ? null : replace({
                exclude: 'node_modules/**',
                preventAssignment: true,
                'process.env.NODE_ENV': JSON.stringify('production'),
                ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
            }),
            peerDepsExternal(),
            commonjs(),
            typescript2({
                tsconfig: "tsconfig.json",
                transformers: [
                    () => ({
                        before: [styledComponentsTransformer],
                    }),
                ],
            }),
            alias({
                resolve: ['.js', '.ts', '.jsx', '.tsx'],
                entries: [
                    { find: '@components', replacement: './src/components'},
                    { find: '@services', replacement: './src/services'},
                    { find: '@utils', replacement: 'src/utils' },
                    { find: '@animations', replacement: 'src/animations'},
                    { find: '@hooks', replacement: 'src/hooks'}
                ],
            }),
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
            resolve()
        ],
        external: [/@babel\/runtime/]
    },
    {
        input: "dist/cjs/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "cjs" }],
        plugins: [dts()],
    },
];
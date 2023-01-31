import packageJson from "./package.json" assert {type: "json"};
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from "@rollup/plugin-typescript";
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

const extensions = [".ts", ".tsx"];

const config = [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                exports: 'auto',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                exports: 'auto',
                sourcemap: true,

            },
        ],
        plugins: [
            resolve({ browser: true}),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                sourceMap: true,
                inlineSources: true,
            }),
            postcss({
                plugins: [],
                minimize: true
            }),
            peerDepsExternal(),
            terser()
        ],
        watch: {
            clearScreen: true,
        },
        external: []
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{file: 'dist/index.d.ts', format: 'esm'}],
        plugins: [dts()],
        external: [/\.s?css$/]
    }
]

export default config
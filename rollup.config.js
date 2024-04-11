import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

/**
 * Documentación Oficial de Rollup
 * @see https://rollupjs.org/command-line-interface/
 */
export default {
    input: './index.js',
    output: {
        file: './shared/dist/bundle.prod.min.js',
        format: 'esm'
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        commonjs(),
        json(),
        nodeResolve(),
        terser(),
    ]
};
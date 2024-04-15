const { nodeResolve } = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const terser = require('@rollup/plugin-terser');

/**
 * Documentación Oficial de Rollup
 * @see https://rollupjs.org/command-line-interface/
 */
export default {
    input: './index.js',
    output: {
        file: './shared/dist/bundle.prod.min.js',
        format: 'cjs'
    },
    plugins: [
        babel({ 
            babelHelpers: 'bundled',
            exclude: 'node_modules/**' 
        }),
        commonjs(),
        json(),
        nodeResolve(),
        terser(),
    ]
};
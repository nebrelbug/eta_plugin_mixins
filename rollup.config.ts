import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'

const pkg = require('./package.json')

export default [
  {
    input: 'src/browser.ts', // todo: use rollup-plugin-replace
    output: [
      {
        file: 'dist/browser/eta.dev.js',
        format: 'umd',
        name: 'Eta',
        sourcemap: true
      }
    ],
    plugins: [typescript({ useTsconfigDeclarationDir: true }), commonjs(), resolve()],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
      include: 'src/**'
    }
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [typescript({ useTsconfigDeclarationDir: true }), commonjs(), resolve()],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
      include: 'src/**'
    }
  }
]

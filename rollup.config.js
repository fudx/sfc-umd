import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/my-component.js',
    format: 'umd',
    name: 'MyComponent'
  },
  plugins: [
    vue(),
    babel({
      babelHelpers: 'bundled'
    }),
    terser()
  ]
}

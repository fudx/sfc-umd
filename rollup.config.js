import vue from 'rollup-plugin-vue';
import babel from 'rollup-plugin-babel';

export default {
  input: './index.vue',
  output: {
    name: 'index',
    file: 'dist/file.js',
    format: 'umd',
    globals: {
        'vue': 'Vue',
    },
  },
  plugins: [
    vue(),
    babel({
      exclude: 'node_modules/**', // 排除 node_modules 中的代码
    }),
  ],
};

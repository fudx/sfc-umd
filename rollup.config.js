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
    vue({
      css: true, // 将组件中的 CSS 提取到单独的文件中
      compileTemplate: true, // 将模板编译为 render 函数
    }),
    babel({
      exclude: 'node_modules/**', // 排除 node_modules 中的代码
    }),
  ],
};

/*
 * @Descripttion:
 * @Author: liugang
 * @Date: 2021-12-31 23:32:17
 * @LastEditors: liugang
 * @LastEditTime: 2022-04-17 22:50:29
 */
import { fileURLToPath } from 'url'
import path, { resolve } from 'path'
import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin as vue2 } from 'vite-plugin-vue2'
import scriptSetup from 'unplugin-vue2-script-setup/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',

  plugins: [
    vue2({
      jsx: true,
    }),
    scriptSetup(),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
    Components({
      /* options */
    }),
  ],

  css: {
    preprocessorOptions: {
      less: {
        globalVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/assets/theme.less'
          )}"`,
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@API': fileURLToPath(new URL('./src/api', import.meta.url)),
      '@ASS': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@VIE': fileURLToPath(new URL('./src/views', import.meta.url)),
    },
  },

  // 构建
  build: {
    // 传递给 Terser 的更多 minify 选项。
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // 自定义底层的 Rollup 打包配置
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },

    // chunk 大小警告的限制
    chunkSizeWarningLimit: 800, // FIXME: 鸵鸟 = =...

    // 浏览器兼容性  "esnext"|"modules"
    target: 'modules',
    // 输出路径
    outDir: 'dist',
    // 生成静态资源的存放路径
    assetsDir: 'assets',
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
    assetsInlineLimit: 4096,
    // 启用/禁用 CSS 代码拆分
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件
    sourcemap: false,
    // @rollup/plugin-commonjs 插件的选项
    commonjsOptions: {},
    // 构建的库
    //当设置为 true，构建后将会生成 manifest.json 文件
    manifest: false,
    // 设置为 false 可以禁用最小化混淆，
    // 或是用来指定使用哪种混淆器
    // boolean | 'terser' | 'esbuild'
    minify: 'terser',

    // 设置为 false 来禁用将构建后的文件写入磁盘
    write: true,
    // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    // 启用/禁用 brotli 压缩大小报告
    brotliSize: true,
  },
})

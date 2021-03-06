const path = require('path');
const sidebar = require('./configs/sidebar');

module.exports = {
  base: '/tricks/',
  dest: 'tricks',
  // 站点配置
  lang: 'zh-CN',
  title: '代码手册',
  description: '个人总结，经验积累',
  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@components/, path.resolve(__dirname, './components')),
    },
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    navbar: [
      {
        text: 'CSS',
        link: '/css/',
      },
      {
        text: '我的博客',
        link: 'https://www.leevii.com',
      },
    ],
    sidebar,
  },
};

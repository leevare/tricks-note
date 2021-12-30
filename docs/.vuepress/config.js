const path = require('path')

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '七月时光',
  description: '个人总结，经验积累',
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
  },
}

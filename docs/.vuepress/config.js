module.exports = ctx => ({
    title: 'framework docs',
    head: [['link', { rel: 'icon', href: '/logo.ico' }]],
    description: 'document of framework',
    theme: '@vuepress/theme-default',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: '我的博客', link: 'https://lzlevin.cn' },
            { text: '我的仓库', link: 'https://github.com/lzlevin' },
        ],
    }
})
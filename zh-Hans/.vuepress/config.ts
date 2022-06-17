import { defineUserConfig, viteBundler } from 'vuepress'
import { searchPlugin }  from '@vuepress/plugin-search'
import { localTheme } from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '项目',
  description: '项目描述',

  theme: localTheme({
    searchPlaceholder: '请输入...',
    sidebarDepth: 0,
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '指南',
        link: '/guide',
      },
      {
        text: 'API 参考',
        link: '/api',
      },
      {
        text: '数据字典',
        link: '/database'
      },
      {
        text: '项目资料',
        children: [
          {
            text: '飞书',
            children: [
              {
                text: '目录索引',
                link: 'https://feishu.cn'
              },
            ],
          },
          {
            text: 'Apifox',
            children: [
              {
                text: '接口文档',
                link: 'https://www.apifox.cn/web'
              },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '开发资料',
          children: [
            '/guide',
          ],
        }
      ],
      '/api/': [
        {
          text: '概览',
          children: [
            {
              text: '目录',
              link: '/api',
            },
            '/api/header',
            '/api/response',
          ],
        }
      ],
      '/database/': [
        {
          text: '数据字典',
          children: [
            '/database',
            {
              text: '用户',
              collapsible: true,
              children: [
                '/database/user/users',
              ]
            },
          ]
        },
      ],
    },
  }),

  plugins: [
    searchPlugin({
      searchMaxSuggestions: 10
    }),
  ],

  bundler: viteBundler({
    viteOptions: {
      server: {
        hmr: {
          clientPort: 443,
        }
      }
    },
    vuePluginOptions: {},
  }),
})
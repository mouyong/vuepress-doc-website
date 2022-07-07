import { defineUserConfig, viteBundler } from 'vuepress'
import { searchPlugin }  from '@vuepress/plugin-search'
import { localTheme } from './theme'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '项目',
  description: '项目描述',

  theme: localTheme({
    lastUpdated: false,
    contributors: false,
    searchPlaceholder: '请输入...',
    sidebarDepth: 0,
    navbar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' },
      { text: 'API 参考', link: '/api' },
      { text: '数据字典', link: '/database' },
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
            '/api',
            '/api/header',
            '/api/request',
            '/api/response',
          ],
        },
        {
          text: '用户',
          children: [
            '/api/user/add',
            '/api/user/list',
            '/api/user/delete',
          ]
        },
        {
          text: '接口数据模型',
          children: [
            '/api/models/user',
          ],
        },
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
        {
          text: '字典数据',
          children: [
            {
              text: '民族',
              link: '/database/dictionary/nation',
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

  /**
   * build for sub dir
   */
  // base: '/docs/',
  // dest: '../public/docs/', // relative of `vuepress-docs/` directory

  /**
   * build options
   */
  bundler: viteBundler({
    /**
     * vite config
     */
    viteOptions: {
      server: {
        host: '0.0.0.0',
        // port: 8080,
        hmr: {
          clientPort: 80,
        }
      }
    },
    vuePluginOptions: {},
  }),
})
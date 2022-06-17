import { defineUserConfig, viteBundler } from 'vuepress'
import { searchPlugin }  from '@vuepress/plugin-search'
const { backToTopPlugin } = require('@vuepress/plugin-back-to-top')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')
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
                link: 'https://we9al24qso.feishu.cn/docs/doccndfaOAqZa8Tqr2aYrBZc9mc'
              },
            ],
          },
          {
            text: 'Apifox',
            children: [
              {
                text: '接口文档',
                link: 'https://www.apifox.cn/web/project/1103154'
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
                '/database/user/user_supplements',
              ]
            },
            {
              text: '患者',
              collapsible: true,
              children: [
                '/database/patient/patients',
                '/database/patient/family_relationships',
              ]
            },
            {
              text: '就诊',
              collapsible: true,
              children: [
                '/database/treat/treat_informations',
                '/database/treat/sign_informations',
                '/database/treat/clinical_informations',
                '/database/treat/family_histories',
              ]
            },
            {
              text: '检测',
              collapsible: true,
              children: [
                '/database/test/test_samples',
                '/database/test/test_sample_orders',
                '/database/test/test_sample_reports',
              ]
            },
            {
              text: '随访',
              collapsible: true,
              children: [
                '/database/follow_up/follow_ups',
              ]
            },
            {
              text: '样本',
              collapsible: true,
              children: [
                '/database/sample/sample_warehousings',
                '/database/sample/sample_ex_warehouses',
              ]
            },
            {
              text: '科研',
              collapsible: true,
              children: [
                '/database/project/project_establish_records',
                '/database/project/project_attachments',
              ]
            },
          ]
        },
      ],
    },
  }),

  plugins: [
    backToTopPlugin(),
    mediumZoomPlugin(),
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
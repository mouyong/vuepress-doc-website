## 添加文档

```
git subtree add -P vuepress-docs/ https://github.com/mouyong/vuepress-doc-website.git master

# 安装依赖
cd vuepress-docs/
yarn install

# 编写文档
yarn docs:dev

# 生成静态文件
yarn docs:build
```
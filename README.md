## 说明

精力有限，此项目不再进行维护，建议访问同类型持续维护的项目 https://github.com/mouyong/vitepress-doc-website

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

## 子目录部署

`nginx` 配置
```
location /docs/ {
  try_files $uri $uri/ $uri.html break;
}
```

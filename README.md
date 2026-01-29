# Ozon 掘金 PRO 官网

## 项目结构

```
├── index.html          # 首页
├── about.html          # 关于我们
├── product.html        # 产品及服务
├── platform.html       # 平台服务
├── cooperation.html    # 商务合作
├── css/
│   └── common.css      # 公共样式文件
├── js/
│   ├── common.js       # 公共JavaScript文件
│   └── seo.js          # SEO相关脚本
├── images/
│   └── logos/          # 电商平台Logo图片
│       ├── ozon_logo.svg
│       ├── shopee.svg
│       ├── ebay.svg
│       └── ... (其他平台Logo)
├── logo.png            # 网站Logo
├── logogold.svg        # 金色Logo
├── robots.txt          # 搜索引擎爬虫规则
└── sitemap.xml         # 网站地图

```

## 页面说明

- **index.html** - 网站首页，包含主要展示内容
- **about.html** - 关于我们页面，展示支持的电商平台
- **product.html** - 产品及服务页面
- **platform.html** - 平台服务架构页面
- **cooperation.html** - 商务合作页面

## 技术栈

- HTML5
- CSS3 (使用CSS变量和现代布局)
- JavaScript (使用GSAP动画库)
- 响应式设计

## 使用说明

1. 直接在浏览器中打开 `index.html` 即可查看网站
2. 所有页面使用相对路径，可以部署到任何Web服务器
3. 样式和脚本文件已分离，便于维护

## 注意事项

- 所有图片资源位于 `images/` 目录下
- CSS和JS文件分别位于 `css/` 和 `js/` 目录
- 网站使用外部CDN加载GSAP动画库

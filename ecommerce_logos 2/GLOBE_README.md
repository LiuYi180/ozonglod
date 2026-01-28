# 🌍 跨境电商平台地球可视化

一个交互式3D地球可视化项目，展示全球各地区的跨境电商平台分布。

## 📋 文件说明

### 核心文件

| 文件 | 说明 | 特点 |
|------|------|------|
| **globe_enhanced.html** | 增强版地球可视化 | 推荐使用，功能最完整 |
| **globe_interactive.html** | 基础版地球可视化 | 轻量级版本 |
| **globe_data.json** | 地理位置数据 | 包含所有地区和平台信息 |
| **preview.html** | Logo预览页面 | 查看所有59个Logo |

### 辅助文件

- **README.md** - 原始Logo集合说明
- **logos.json** - Logo索引数据
- **59个SVG文件** - 各平台Logo

## 🚀 快速开始

### 方式一：直接打开HTML文件

```bash
# 在浏览器中打开（推荐使用增强版）
globe_enhanced.html
```

### 方式二：本地服务器运行

```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx http-server

# 然后访问 http://localhost:8000/globe_enhanced.html
```

## 🎮 交互操作

### 鼠标操作

| 操作 | 效果 |
|------|------|
| **拖动** | 旋转地球 |
| **滚轮** | 缩放地球 |
| **点击Logo** | 选中并显示详情 |
| **悬停Logo** | 高亮显示 |

### 键盘操作

- 自动旋转可通过点击控制器按钮切换
- 按住Shift+拖动可平移视图

## 🌐 地区分布

### 已包含的地区

1. **中国** (China)
   - Alibaba Cloud
   - Alibaba.com
   - AliExpress
   - Taobao

2. **东南亚** (Southeast Asia)
   - Shopee
   - Blibli
   - Paytm

3. **欧洲** (Europe)
   - Allegro
   - Zalando
   - Vinted

4. **全球平台** (Global)
   - eBay
   - Etsy
   - Wish
   - Rakuten

5. **支付平台** (Payment)
   - PayPal
   - Stripe
   - Square

6. **游戏平台** (Gaming)
   - Steam
   - Epic Games
   - PlayStation

## 🎨 可视化特点

### 增强版 (globe_enhanced.html)

✨ **高级特性**：

- 🌟 发光效果和粒子系统
- 🎯 精确的地理位置映射
- 🎬 流畅的浮动和脉冲动画
- 💫 选中时的高亮和缩放效果
- 🎨 现代深色UI设计
- 📊 实时统计信息
- 🔍 悬停提示功能
- ⚡ 优化的性能

### 基础版 (globe_interactive.html)

✓ **基础特性**：

- 3D地球渲染
- Logo展示
- 基础交互
- 区域信息显示
- 轻量级代码

## 📊 数据结构

### globe_data.json 格式

```json
{
  "regions": [
    {
      "region": "China",
      "name": "中国",
      "latitude": 35.8617,
      "longitude": 104.1954,
      "platforms": [
        {
          "name": "Alibaba Cloud",
          "file": "alibabacloud.svg",
          "color": "#FF6B6B"
        }
      ]
    }
  ]
}
```

## 🛠️ 技术栈

- **Three.js** - 3D图形库
- **OrbitControls** - 相机控制
- **Canvas** - Logo渲染
- **WebGL** - GPU加速

## 🎯 功能详解

### 1. 3D地球

- 高分辨率纹理映射
- 实时光照计算
- 发光效果
- 自动旋转

### 2. Logo系统

- 自动Canvas渲染
- 圆形设计
- 颜色编码
- 发光背景

### 3. 动画系统

- 浮动动画（正弦波）
- 脉冲缩放
- 平滑过渡
- 帧率优化

### 4. 交互系统

- 射线检测
- 点击选择
- 悬停高亮
- 信息面板

## 📱 响应式设计

所有文件都支持：

- ✅ 桌面浏览器
- ✅ 平板设备
- ✅ 移动设备（触摸操作）
- ✅ 超宽屏显示

## 🔧 自定义修改

### 添加新的地区

编辑 `globe_data.json`：

```json
{
  "region": "Your Region",
  "name": "你的地区",
  "latitude": 0,
  "longitude": 0,
  "platforms": [
    {
      "name": "Platform Name",
      "file": "platform.svg",
      "color": "#RRGGBB"
    }
  ]
}
```

### 修改地球颜色

在HTML文件中搜索 `#1a3a52` 和 `#2d5a3d`，修改为你想要的颜色。

### 调整动画速度

- 地球旋转速度：修改 `earth.rotation.y += 0.0001`
- 浮动速度：修改 `Math.sin(time * 速度)`
- 自动旋转速度：修改 `controls.autoRotateSpeed`

## 🐛 故障排除

### Logo不显示

1. 检查SVG文件是否存在
2. 确保浏览器支持Canvas
3. 查看浏览器控制台错误信息

### 性能问题

1. 减少Logo数量
2. 降低地球分辨率（修改SphereGeometry参数）
3. 禁用阴影效果
4. 关闭自动旋转

### 数据加载失败

1. 确保 `globe_data.json` 在同一目录
2. 使用本地服务器运行（不能直接打开file://）
3. 检查CORS设置

## 📈 性能指标

- **Logo数量**：20+
- **地球分辨率**：128x128
- **帧率**：60 FPS（大多数设备）
- **文件大小**：~25KB（HTML）+ 3KB（JSON）

## 🎓 学习资源

### Three.js 文档
- https://threejs.org/docs/

### 相关教程
- 3D图形基础
- WebGL编程
- 地理信息可视化

## 📝 许可证

所有Logo来自 **Simple Icons** 项目，采用 **CC0 1.0 Universal** 许可证。

- Simple Icons: https://simpleicons.org/
- GitHub: https://github.com/simple-icons/simple-icons

## 🤝 贡献

欢迎提交：

- 新的地区数据
- 性能优化建议
- Bug报告
- 功能请求

## 📞 支持

如有问题，请检查：

1. 浏览器控制台错误
2. 网络连接
3. 文件路径
4. 浏览器兼容性

## 🎉 更新日志

### v1.0 (2026-01-28)

- ✅ 初始版本发布
- ✅ 支持6个地区
- ✅ 20+平台Logo
- ✅ 完整的交互功能
- ✅ 响应式设计

---

**享受探索全球电商平台的旅程！** 🌍✨

# Ripple Grid

一个基于 React 和 OGL 的动态网格背景组件，提供炫酷的涟漪效果和鼠标交互。

## 特性

- 🌊 动态涟漪效果
- 🎨 可自定义颜色和样式
- 🖱️ 鼠标交互支持
- 📱 响应式设计
- ⚡ 高性能 WebGL 渲染
- 🌈 彩虹色彩模式

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 技术栈

- **React 18** - 用户界面框架
- **OGL** - 轻量级 WebGL 库
- **Vite** - 构建工具
- **CSS3** - 样式和动画

## 项目结构

```
Ripple_Grid/
├── src/
│   ├── components/
│   │   ├── RippleGrid.jsx     # 核心网格组件
│   │   └── RippleGrid.css     # 组件样式
│   ├── App.jsx                # 主应用组件
│   ├── App.css                # 应用样式
│   ├── main.jsx               # 应用入口
│   └── index.css              # 全局样式
├── doc/
│   └── code.md                # 详细文档
├── package.json
├── vite.config.js
└── index.html
```

## 组件配置

RippleGrid 组件支持多种配置选项：

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| enableRainbow | boolean | false | 启用彩虹色彩模式 |
| gridColor | string | '#4169e1' | 网格颜色 |
| rippleIntensity | number | 0.05 | 涟漪强度 |
| gridSize | number | 10 | 网格大小 |
| mouseInteraction | boolean | true | 鼠标交互 |
| opacity | number | 0.6 | 透明度 |

## 许可证

MIT License
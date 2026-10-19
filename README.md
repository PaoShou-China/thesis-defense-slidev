# 工科博士答辩 Slidev 模板与批改 Skill

一套蓝红学术风格的 Slidev 模板，配套工科博士答辩幻灯片审查 Skill。当前主分支：微软雅黑统一字体与教程内容增强版。

## 解决什么问题

- 论文内容直接堆进幻灯片，缺少问题、方法、验证和贡献之间的联系。
- 章节、公式、图表和总结页缺乏统一版式。
- 修改建议只关注美观，忽略论证完整性、对照公平性与结论边界。

模板负责统一视觉表达；Skill 用于检查研究主线、内容取舍、逐页论证和答辩追问。

## 字体与内容规范

模板的标题、正文、表格、图注、章节号和页码统一设置为 **微软雅黑（Microsoft YaHei）**。运行与导出环境需安装该字体；本项目不分发字体文件。公式保留 KaTeX 数学字体，外部位图中的文字需在制图源文件中设置。

[学术 PPT 内容要求与教程来源](docs/学术PPT内容要求.md) · [逐条检查表](skills/thesis-defense-slide-review/references/academic-presentation-content.md)

新增内容规范提炼自 MIT 工程与航空航天 Communication Lab、Penn State 和 CMU Libraries 教程，并已纳入批改 Skill。重点包括核心信息、标题故事线、单页观点与证据、多研究工作联系、读图引导及备份页。工科适配建议单独标明，不视为学校强制要求。

## 图片展示

以下图片展示现有模板的布局，文字、表格和标题均可编辑。图片来自此前构建，章节号和页码仍显示旧字体；最新字体以源码中的微软雅黑设置为准。

### 封面

![封面](docs/images/cover.png)

### 目录与章节过渡

![目录](docs/images/agenda.png)

### 图文内容页

![研究背景](docs/images/background.png)

### 公式与变量说明

![公式页](docs/images/formula.png)

### 结果对比

![结果页](docs/images/results.png)

## 快速开始

建议 Node.js 22.12 或更高版本。

```bash
git clone https://github.com/PaoShou-China/thesis-defense-slidev.git
cd thesis-defense-slidev/template
npm ci
npm run dev
```

编辑 `template/slides.md` 即可修改演示内容。

```bash
npm run build   # 生成 dist 静态网页
npm run export  # 导出 PDF
```

首次导出如提示缺少浏览器，按提示安装 Playwright Chromium。静态网页需通过 HTTP 服务访问，不能直接双击 dist/index.html。

## 模板版式

共 12 页示例：封面、目录、背景图文、研究现状表格、总体路线、章节过渡、核心公式、方法框图、三栏验证场景、结果对比、贡献总结和致谢。

设计特征：16∶9 白底、深蓝标题和横线、红色关键词、蓝底章节编号、自动页码、左蓝右白目录与 SVG 封面曲线。参考稿中的人物、机构标志、建筑图片及原 PDF 均未收入本项目。

### 设置普通页面

```yaml
---
section: '2.1'
heading: 模型高效学习
emphasis: 基础科学问题
---
```

`heading` 控制蓝色标题，`emphasis` 控制红色重点。页码和总页数自动计算。

### 插图与公式

将图片放到 `template/public/`，在 Markdown 中写：

```html
<img src="/experiment.png" alt="实验平台">
```

公式使用标准 LaTeX，例如：

```latex
$$
x_{k+1}=f(x_k,u_k)
$$
```

## 使用批改 Skill

位置：[`skills/thesis-defense-slide-review/SKILL.md`](skills/thesis-defense-slide-review/SKILL.md)。

在支持本地 Skills 的工具中，将整个 `thesis-defense-slide-review` 文件夹放到工具要求的 Skills 目录，例如 Codex 的 `~/.codex/skills/`。加载方式以所用工具为准。也可以直接把 SKILL.md 作为审查指令交给 AI。

调用示例：

> 使用 $thesis-defense-slide-review 批改这份工科博士答辩幻灯片。答辩时长为 30 分钟，请优先检查研究主线、贡献与证据对应关系，再给出逐页修改意见。

主要输出：总体诊断、P0/P1/P2 修改清单、逐页意见、必要的目录重排、答辩追问及格式检查。默认提供意见；要求直接修改时，再实施改稿。

## 项目结构

| 路径 | 用途 |
| --- | --- |
| `template/slides.md` | 12 页模板内容 |
| `template/style.css` | 全局字号、颜色与间距 |
| `template/layouts/` | 普通页、封面、目录布局 |
| `template/public/` | 本地图片资源 |
| `skills/thesis-defense-slide-review/` | 批改 Skill 与界面元数据 |
| `docs/images/` | README 实际页面预览 |

## 常见问题

**中文字体不一致？**

请在播放和导出设备上安装微软雅黑。模板统一指定此字体；若设备缺少字体，浏览器可能自行回退，此时不能保证相同的显示效果。

**标题太长或正文放不下？**

缩短标题、拆页或将推导放到备份页。优先调整内容结构，再改 `style.css`，避免持续缩小字号。

**能直接作为论文成果展示吗？**

示例文字、公式、图片框与数据表均为占位。请替换为真实材料，补齐文献来源、单位、对照设置和统计说明。

**这是学校官方模板吗？**

这是参考用户提供的版式制作的通用学术模板。学校明确要求的封面、标志和格式需另行遵循。

**Skill 会自动修改文件吗？**

默认给出审查意见。只有明确要求改稿时才修改源文件；技术疑点会标注待核实，不虚构结论。

## 验证

已通过 Slidev 52.20.1 的生产构建。依赖由 `package-lock.json` 固定。预览图由模板页面实际渲染生成。主分支包含最新字体与内容规范；v1.0.0 为此前已发布快照。

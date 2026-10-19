---
theme: default
title: 工科博士答辩模板
aspectRatio: 16/9
canvasWidth: 960
colorSchema: light
fonts:
  sans: Microsoft YaHei
  serif: Microsoft YaHei
  mono: Microsoft YaHei
  local: Microsoft YaHei
  provider: none
layout: cover
presenter: 答辩人：×××
institute: 所在单位：××学院
supervisor: 指导教师：××教授
date: 20XX 年 X 月 · 北京
transition: none
---

# 航天器动力学模型学习<br>与智能优化控制

<!-- 所有示例均为排版占位，不代表真实研究成果。 -->


---
layout: agenda
---

<div class="agenda-item active"><b>一</b><span>研究背景与思路</span></div>
<div class="agenda-item "><b>二</b><span>主要研究工作</span></div>
<div class="agenda-item "><b>三</b><span>工作总结与展望</span></div>

---
section: "1.1"
heading: 研究背景
emphasis: 工程需求与关键挑战
---

<div class="banner">从具体任务中提出可验证的研究问题</div>
<div class="cols-2">
<div>

### 任务需求

- 介绍研究对象及典型工况
- 说明现有系统的性能约束
- 给出需要改善的评价指标

### 关键挑战

**模型不确定性**与实时计算约束影响控制性能。

</div>
<div><div class="figure">工程任务图片 / 研究对象示意图</div><div class="caption">图 1　研究对象与任务场景</div></div>
</div>


---
section: "1.2"
heading: 研究现状
emphasis: 现有方法与研究缺口
---

<table><thead><tr><th>方法类别</th><th>已有能力</th><th>适用限制</th></tr></thead><tbody><tr><td>物理建模</td><td>描述动力学关系</td><td>补充模型假设</td></tr><tr><td>数据驱动</td><td>由观测估计模型</td><td>补充数据覆盖条件</td></tr><tr><td>优化控制</td><td>处理目标与约束</td><td>补充计算预算要求</td></tr></tbody></table>
<div class="takeaway">研究缺口：明确现有证据尚未解决的问题。</div>
<div class="small">参考文献：[1] 作者，题目，期刊，年份。请替换为核验过的真实文献。</div>


---
section: "1.3"
heading: 研究思路
emphasis: 总体技术路线
---

<div class="banner">围绕同一个工程问题组织研究工作</div>
<div class="cols-3"><div class="panel"><h3>研究工作一</h3><p>模型学习</p><p class="small">输入：观测数据<br>输出：模型与误差描述</p></div><div class="panel"><h3>研究工作二</h3><p>智能优化控制</p><p class="small">输入：模型与约束<br>输出：可执行决策</p></div><div class="panel"><h3>研究工作三</h3><p>系统验证</p><p class="small">输入：算法与任务<br>输出：性能与边界</p></div></div>
<div class="takeaway">共同目标：填入与任务指标直接对应的研究目标。</div>


---
layout: agenda
---

<div class="agenda-item "><b>一</b><span>研究背景与思路</span></div>
<div class="agenda-item active"><b>二</b><span>主要研究工作</span></div>
<div class="agenda-item "><b>三</b><span>工作总结与展望</span></div>

---
section: "2.1"
heading: 模型学习
emphasis: 问题定义与核心公式
---

<div class="banner">示例：学习名义模型无法解释的动力学残差</div>

$$
x_{k+1}=f_{\mathrm{nom}}(x_k,u_k)+r_\theta(x_k,u_k)
$$

<div class="cols-2">
<div>

### 变量含义

- $x_k$：系统状态
- $u_k$：控制输入
- $r_\theta$：参数化残差模型

</div>
<div>

### 需要说明的条件

- 数据覆盖的状态范围
- 模型误差评价方式
- 方法成立的假设

</div>
</div>
<div class="small">公式仅作排版示例，使用时替换为实际研究模型。</div>


---
section: "2.2"
heading: 方法设计
emphasis: 算法结构与关键机制
---

<div class="cols-2"><div><div class="figure">算法框图 / 控制系统框图<br>建议使用清晰的 SVG 图</div><div class="caption">图 2　方法结构示意</div></div><div>

### 核心设计

1. 输入与预处理
2. 关键更新或求解过程
3. 输出与执行机制

### 与现有方法的差异

**具体改变了哪个环节，依据是什么？**

</div></div>


---
section: "2.3"
heading: 工程验证
emphasis: 任务场景与实验设置
---

<div class="banner">使用一致的评价规则验证算法能力</div><div class="cols-3"><div class="panel"><div class="figure" style="min-height:170px">任务场景1</div><h3 style="text-align:center;margin-top:12px">仿真验证</h3><p class="small">对象、工况、基线与种子</p></div><div class="panel"><div class="figure" style="min-height:170px">任务场景2</div><h3 style="text-align:center;margin-top:12px">硬件在环</h3><p class="small">硬件、采样周期与计算预算</p></div><div class="panel"><div class="figure" style="min-height:170px">任务场景3</div><h3 style="text-align:center;margin-top:12px">实物实验</h3><p class="small">平台、安全边界与重复次数</p></div></div>


---
section: "2.4"
heading: 实验结果
emphasis: 性能对比与适用范围
---

<div class="cols-2"><div><div class="figure">曲线图 / 误差分布图<br>注明坐标、单位、图例与不确定性</div><div class="caption">图 3　相同工况下的性能比较</div></div><div><table><thead><tr><th>指标</th><th>基线</th><th>本文</th></tr></thead><tbody><tr><td>跟踪误差</td><td>待填</td><td>待填</td></tr><tr><td>计算时间</td><td>待填</td><td>待填</td></tr><tr><td>约束违反率</td><td>待填</td><td>待填</td></tr></tbody></table><p class="small">仅填入真实结果，注明统计方式与重复次数。</p></div></div><div class="takeaway">本页结论：说明结果支持的判断及其工况边界。</div>


---
section: "3.1"
heading: 工作总结
emphasis: 主要贡献与证据
---

<div class="banner">研究问题、贡献与证据逐项对应</div><table><thead><tr><th>研究问题</th><th>主要贡献</th><th>支撑证据</th></tr></thead><tbody><tr><td>问题一</td><td>方法或理论结果</td><td>定理 / 实验编号</td></tr><tr><td>问题二</td><td>机制或系统实现</td><td>对照 / 消融结果</td></tr><tr><td>问题三</td><td>验证及适用范围</td><td>任务 / 平台记录</td></tr></tbody></table><div class="takeaway">未来工作：围绕当前研究中已确认的限制展开。</div>


---
layout: cover
date: 感谢各位专家指导
---

# 敬请各位专家批评指正

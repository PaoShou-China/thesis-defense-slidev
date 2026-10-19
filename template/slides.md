---
theme: default
title: 西红柿炒鸡蛋科研汇报示例
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
event: 科研汇报教学示例
presenter: 汇报人：番茄课题组
institute: 研究对象：西红柿炒鸡蛋
supervisor: 主题：从问题到证据
date: 配套可复现教学模型
transition: none
---

# 面向口味一致性的西红柿炒鸡蛋<br>配比协同调节方法研究

<!-- 原创教学演绎，使用家常菜类比科研流程。数值来自合成响应模型，不是食品实验或真实口味结论。建议讲述约 12–15 分钟，按实际演练调整。 -->

---
layout: agenda
class: agenda-full
---

<div class="agenda-item "><b>一</b><span>研究背景与意义</span></div>
<div class="agenda-item "><b>二</b><span>国内外研究现状</span></div>
<div class="agenda-item "><b>三</b><span>研究目标与技术路线</span></div>
<div class="agenda-item "><b>四</b><span>主要研究工作</span></div>
<div class="agenda-item "><b>五</b><span>实验验证与结果分析</span></div>
<div class="agenda-item "><b>六</b><span>创新点与主要贡献</span></div>
<div class="agenda-item "><b>七</b><span>总结与展望</span></div>

---
section: "1.1"
heading: 研究背景
emphasis: 配方相同，结果可能不同
---

<div class="cols-2"><div>

### 一个熟悉的问题

同样照着配方做，为什么味道难以保持一致？

- 原料状态可能变化
- 固定用量难以对应所有批次
- “适量”缺少可复现的描述

**研究目标：减少批次之间的响应偏差。**

</div><div><img src="/tomato/dish.svg" style="width:100%;margin-top:24px" alt="原创番茄炒蛋示意图"></div></div>

<!-- 用熟悉场景提出一致性问题。这里把原料变化作为待研究因素，不声称已证明真实食品机理。 -->

---
section: "1.2"
heading: 研究意义
emphasis: 从一次成功走向稳定复现
---

<div class="cols-2"><div>

### 工程意义

- 将“适量”转成明确的输入规则
- 识别原料批次变化的影响
- 用一致指标比较不同方案

</div><div>

### 方法研究意义

- 区分目标变化与性能改善
- 将经验配方转为可检验假设
- 用对照和消融解释作用机制

</div></div><div class="takeaway">本教学案例关注可复现研究设计与证据组织。</div>

---
section: "2.1"
heading: 国内外研究现状
emphasis: 按方法能力组织研究脉络
---

<table><thead><tr><th>方案</th><th>改变了什么</th><th>仍需回答</th></tr></thead><tbody><tr><td>固定原配方</td><td>固定基础调味</td><td>原料变化时如何保持一致？</td></tr><tr><td>固定加辣椒</td><td>增加一个风味维度</td><td>新目标是否真的需要它？</td></tr><tr><td>根据原料调节</td><td>让用量随状态变化</td><td>误差来自哪里，如何验证？</td></tr></tbody></table><div class="small">教学示例：真实论文中应在这里概括国内外代表工作、比较依据与研究不足。</div><div class="takeaway">配料变化需要与目标、方法和证据建立联系。</div>

<!-- 这是方案类别的教学比较，不是对真实文献的综述，不使用虚构作者和论文。 -->

---
section: "2.2"
heading: 现有不足
emphasis: 从方案比较凝练研究问题
---

<div class="banner">从“是否新增配料”转向“能否稳定达到目标”</div><table><thead><tr><th>现有方案的局限</th><th>需要研究的问题</th></tr></thead><tbody><tr><td>固定配方忽略批次变化</td><td>如何建立扰动与响应的关系？</td></tr><tr><td>新增配料改变了目标维度</td><td>如何在相同目标下公平比较？</td></tr><tr><td>只展示综合结果</td><td>如何辨认每个调节环节的作用？</td></tr></tbody></table><div class="small">方法归类用于演示研究现状的讲法，不代表已完成真实食品文献的国内外系统综述。</div>

---
section: "3.1"
heading: 研究目标与内容
emphasis: 以响应一致性串联研究任务
---

<table><thead><tr><th>研究目标</th><th>研究内容</th><th>对应证据</th></tr></thead><tbody><tr><td>明确批次偏差的来源</td><td>构建扰动—用量—响应模型</td><td>解析关系与条件说明</td></tr><tr><td>减少指定目标的响应误差</td><td>设计双通道配比调节规则</td><td>同批次对照实验</td></tr><tr><td>解释方法各环节的作用</td><td>开展消融与扰动分析</td><td>逐项去除调节机制</td></tr></tbody></table><div class="takeaway">总体目标：在已定义的教学模型内，提高响应一致性。</div>

---
section: "3.2"
heading: 问题定义
emphasis: 先把“好吃”改成可检验目标
---

<div class="banner">本例研究“接近指定响应”，不评价谁觉得更好吃</div>
<div class="cols-2"><div>

### 教学变量

- $m$：原料扰动因子
- $u_1$：基础调味用量
- $u_2$：辣椒调味用量
- $z_1,z_2$：归一化响应

</div><div>

### 固定目标

$$
z^\star=(0.8,\;0.3)
$$

$$
e=\lVert z-z^\star\rVert_2
$$

目标是减少 $e$，不是追求更辣。

</div></div><div class="small">所有变量与目标均为人为定义的教学量，无物理单位和真实口感标定。</div>

<!-- 先明确目标与指标，避免把加辣后更辣作为方法更好的证据。 -->

---
section: "3.3"
heading: 总体技术路线
emphasis: 将配方改成随原料变化的规则
---

<img src="/tomato/process.svg" alt="观察、计算、执行与评价流程" style="width:100%;margin-top:25px"><div class="takeaway">核心假设：若响应随原料因子缩放，用量也应随之调节。</div><div class="small">烹饪流程为类比场景；本次计算未模拟温度、时间、营养或食品安全。</div>

<!-- 说明研究范围。下一部分只验证一个清楚的合成响应模型，不能外推到真实烹饪。 -->

---
layout: agenda
class: agenda-full
---

<div class="agenda-item "><b>一</b><span>研究背景与意义</span></div>
<div class="agenda-item "><b>二</b><span>国内外研究现状</span></div>
<div class="agenda-item "><b>三</b><span>研究目标与技术路线</span></div>
<div class="agenda-item active"><b>四</b><span>主要研究工作</span></div>
<div class="agenda-item "><b>五</b><span>实验验证与结果分析</span></div>
<div class="agenda-item "><b>六</b><span>创新点与主要贡献</span></div>
<div class="agenda-item "><b>七</b><span>总结与展望</span></div>

---
section: "4.1"
heading: 研究工作一
emphasis: 扰动与响应的模型描述
---

<div class="banner">设定一个可计算、可重复的合成响应关系</div>

$$
z_1=\frac{u_1}{m},\qquad z_2=\frac{u_2}{m}
$$

<div class="cols-2"><div>

### 固定配方

$u_1,u_2$ 保持不变，$m$ 改变时，响应随之变化。

</div><div>

### 问题转化

根据估计值 $\hat m$ 调整用量，使响应接近给定目标。

</div></div><div class="small">这是为解释方法逻辑而构造的模型，不是经过食品实验识别的规律。</div>

<!-- 模型故意简单，使问题和机制一目了然。不能将其作为菜肴化学或感官科学理论。 -->

---
section: "4.2"
heading: 研究工作二
emphasis: 双通道配比调节方法
---

<div class="banner">用估计原料因子缩放两种调味用量</div>

$$
u_1=0.8\hat m,\qquad u_2=0.3\hat m
$$

<div class="cols-2"><div>

### 机制解释

估计准确时，两个响应均回到指定目标。

</div><div>

### 误差来源

$$
e=\sqrt{0.8^2+0.3^2}\left|\frac{\hat m}{m}-1\right|
$$

性能取决于估计误差和模型是否适用。

</div></div>

<!-- 推导直接由定义得到。这里没有学习算法，也不将解析补偿包装成新算法。 -->

---
layout: agenda
class: agenda-full
---

<div class="agenda-item "><b>一</b><span>研究背景与意义</span></div>
<div class="agenda-item "><b>二</b><span>国内外研究现状</span></div>
<div class="agenda-item "><b>三</b><span>研究目标与技术路线</span></div>
<div class="agenda-item "><b>四</b><span>主要研究工作</span></div>
<div class="agenda-item active"><b>五</b><span>实验验证与结果分析</span></div>
<div class="agenda-item "><b>六</b><span>创新点与主要贡献</span></div>
<div class="agenda-item "><b>七</b><span>总结与展望</span></div>

---
section: "5.1"
heading: 实验设置
emphasis: 所有方案使用相同测试批次
---

<div class="cols-2"><div>

### 可复现设置

- 200 个合成批次
- 随机种子：20261019
- 原料因子：均匀分布 [0.65, 1.35]
- 估计噪声标准差：0.03

</div><div>

### 公平比较

固定目标、模型与原料批次，仅改变配比规则。

**评价：RMSE 与误差第 95 百分位。**

按批次保留数据，可逐条检查。

</div></div><div class="takeaway">这一实验验证模型内的机制，不等同于试吃实验。</div>

<!-- 噪声是对原料因子的加性高斯噪声；估计值下限为0.1。没有训练集拟合，因此无需伪造训练过程。 -->

---
section: "5.2"
heading: 对比实验
emphasis: 协同调节减少教学模型中的偏差
---

<div class="cols-2"><div><img src="/tomato/comparison.svg" alt="测试误差对比" style="width:100%;margin-top:20px"></div><div><table><thead><tr><th>方案</th><th>RMSE</th><th>P95</th></tr></thead><tbody><tr><td>固定原配方</td><td>0.345</td><td>0.468</td></tr><tr><td>固定加辣椒</td><td>0.181</td><td>0.383</td></tr><tr><td>仅调整基础调味</td><td>0.069</td><td>0.138</td></tr><tr><td>配比协同调节</td><td>0.027</td><td>0.054</td></tr></tbody></table></div></div><div class="takeaway">在所设模型与噪声下，协同调节更接近指定响应。</div><div class="small">数据来自附带 Python 程序的实际运行；不能据此声称菜更好吃。</div>

<!-- 先读指标与目标，再比较方案。固定原配方没有辣椒通道，是任务对照，不能据此否定不吃辣人群的配方。 -->

---
section: "5.3"
heading: 消融实验
emphasis: 只调一个通道会保留另一通道误差
---

<div class="banner">消融问题：改善来自新增通道，还是来自状态调节？</div><table><thead><tr><th>方案</th><th>基础通道调节</th><th>辣椒通道调节</th><th>RMSE</th></tr></thead><tbody><tr><td>固定加辣椒</td><td>否</td><td>否</td><td>0.181</td></tr><tr><td>仅调整基础调味</td><td>是</td><td>否</td><td>0.069</td></tr><tr><td>配比协同调节</td><td>是</td><td>是</td><td>0.027</td></tr></tbody></table><div class="takeaway">逐项移除机制，有助于解释各环节的作用。</div>

<!-- 消融和主表使用同一批结果，不重复声称新增实验。只表明这个合成模型中的构成作用。 -->

---
section: "5.4"
heading: 扰动分析
emphasis: 固定用量对偏离名义状态更敏感
---

<img src="/tomato/robustness.svg" style="height:315px;width:100%;object-fit:contain" alt="原料因子与响应误差散点图"><div class="small">教学仿真；点为同一测试批次。此图没有评估真实食品、不同锅具或其他响应规律。</div>

<!-- 对原料因子轴进行读图引导。散点只展示当前采样范围，不证明所有扰动下都鲁棒。 -->

---
section: "6.1"
heading: 创新点与主要贡献
emphasis: 问题、方法和证据逐项对应
---

<table><thead><tr><th>贡献组织方式</th><th>本例内容</th><th>支撑依据</th></tr></thead><tbody><tr><td>问题表述</td><td>将“好吃”转为给定响应的一致性</td><td>目标与指标定义</td></tr><tr><td>方法机制</td><td>按估计原料因子调节两个通道</td><td>解析推导与对照结果</td></tr><tr><td>验证设计</td><td>以同批次对照、消融检验机制</td><td>数据、脚本与误差分析</td></tr></tbody></table><div class="takeaway">创新表述需要具体说明新增了什么，以及由什么证据支持。</div><div class="small">本页示范博士答辩的贡献表达，不声称教学中的简单解析补偿具有真实学术新颖性。</div>

---
section: "7.1"
heading: 研究局限
emphasis: 模型结论与真实实验的距离
---

<div class="cols-2"><div>

### 当前结果支持

- 在给定模型下，解析补偿有效
- 估计质量影响响应偏差
- 消融能够解释通道作用

</div><div>

### 真实验证还需要

- 明确人群与感官评价规则
- 随机呈样、盲评和重复批次
- 对原料、火候和用量做记录
- 检查模型与实际响应的偏差

</div></div><div class="takeaway">模型内成立的结论，需要在目标场景中继续验证。</div>

<!-- 不宣称真实口味改善、食品安全、营养或临床效果；这些没有在本例中测量。 -->

---
section: "7.2"
heading: 研究总结
emphasis: 把一道菜组织成完整研究论证
---

<table><thead><tr><th>研究环节</th><th>本例做法</th><th>可复用的汇报方法</th></tr></thead><tbody><tr><td>问题</td><td>批次响应难以一致</td><td>从明确困难出发</td></tr><tr><td>方法</td><td>按估计状态协同调节</td><td>解释机制与成立条件</td></tr><tr><td>证据</td><td>对照、消融和扰动分析</td><td>让实验逐项回答问题</td></tr><tr><td>结论</td><td>给定模型内偏差减小</td><td>贡献与证据范围一致</td></tr></tbody></table><div class="takeaway">一道家常菜也能讲出清楚的问题、机制、证据和边界。</div>

<!-- 这是汇报教学总结，不将教学中的解析规则宣称为真实科研创新。 -->

---
section: "7.3"
heading: 研究展望
emphasis: 从教学模型迈向真实问题
---

<div class="cols-2"><div>

### 模型完善

- 用真实记录识别响应关系
- 检查非线性、耦合与时变因素
- 量化估计误差与失效范围

</div><div>

### 验证拓展

- 先明确评价人群与目标
- 设计随机呈样和盲评流程
- 扩展原料批次与工况范围

</div></div><div class="takeaway">下一步验证模型假设，再讨论方法能否用于真实场景。</div>

---
layout: cover
event: 科研汇报教学示例
presenter: 番茄课题组
institute: 示例代码与数据均已附带
supervisor: 欢迎讨论研究设计
date: 感谢聆听
---

# 欢迎提问<br>这盘菜的证据够不够？

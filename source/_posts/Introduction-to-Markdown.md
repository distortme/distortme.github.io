---
title: Introduction to Markdown
mathjax: true
date: 2023-11-25 23:29:37
categories:
- tech
tags:
- code
---

本文介绍基础的`markdown`语法。

<!-- more -->

## 块语法

### 段落和换行符

段落由多个空行分隔，单行中断会被忽略。多个空格与单个空格效果相同。

### 标题

标题在行的开头使用1-6个`#`，对应1-6的标题级别。

```markdown
#### 这是四级标题
```

#### 这是四级标题

### 引用

```markdown
> 这是一个两段的块引用。这是第一段。
>
> 这是第二段。

> 这是另一个只有一段的块引用。
```

> 这是一个两段的块引用。这是第一段。
>
> 这是第二段。

> 这是另一个只有一段的块引用。

### 列表

```markdown
* 这是一个无序列表
	* 缩进意味着列表的嵌套
	- 也可以这样
	+ 还有这样
	
1. 这是一个有序列表
4. 其列标会自动修正
	12. 也可以嵌套
	15. 就像这样

- [ ] 这是一个任务列表
	1. [ ] 需要在前面使用列表的语法
	2. [x] 完成后变成这样
```

* 这是一个无序列表
	* 缩进意味着列表的嵌套
	- 也可以这样
	+ 还有这样
	

1. 这是一个有序列表
4. 其列标会自动修正
	12. 也可以嵌套
	15. 就像这样

- [ ] 这是一个任务列表
	1. [ ] 需要在前面使用列表的语法
	2. [x] 完成后变成这样

### 代码块

````markdown
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
````

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

### 数学公式块

```latex
$$
\mathbf{V}_1 \times \mathbf{V}_2 =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$
```

$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix} 
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$

### 表格

```markdown
| 左对齐 | 居中 | 右对齐 |
| :-- | :--: | --:|
| 这一列 | 这一列 | 这一列 |
| 是 | 是 | 是 |
| 左对齐 | 居中 | 右对齐 |
```

| 左对齐 |  居中  | 右对齐 |
| :----- | :----: | -----: |
| 这一列 | 这一列 | 这一列 |
| 是     |   是   |     是 |
| 左对齐 |  居中  | 右对齐 |

### 脚注

```markdown
可以像这样创建脚注[^1]。

[^1]: 点击可以在脚注和原文之间跳跃。
```

可以像这样创建脚注[^1]。

[^1]: 点击可以在脚注和原文之间跳跃。

### 水平线

```markdown
---
```

---

### YAML Front Matter

```markdown
---
key: balue
---
```

[YAML Front Matter](http://jekyllrb.com/docs/frontmatter/) 只能在文章的顶部使用，所以不能展示，然而本文的确使用了 `YAML Front Matter`。

## 内联语法

### 链接

```markdown
这是一个[链接](https://distortme.github.io/ "可以省略")

这也是一个[链接][id]

[id]: https://distortme.github.io/ "可以省略"

[第一种格式的链接通过书签可以链接到文章标题](#脚注)
```

这是一个[链接](https://distortme.github.io/ "可以省略")

这也是一个[链接][id]

[id]: https://distortme.github.io/ "可以省略"

[第一种格式的链接通过书签可以链接到文章标题](#脚注)

### 图片

```markdown
![如果链接失败会这样](http://localhost:4000/ "标题")

![替代文字](https://distortme.github.io/images/favicon.ico "鼠标移到图片上显示这个")
```

![如果链接失败会这样](http://localhost:4000/ "标题")

![替代文字](https://distortme.github.io/images/favicon.ico "鼠标移到图片上显示这个")

### 文字格式

```markdown
*斜体* **加粗** ***加粗的斜体***

`代码` ~~删除~~ $\LaTeX$
```

*斜体* **加粗** ***加粗的斜体***

`代码` ~~删除~~ $\LaTeX$

## `Hexo`标签语法

### 块引用

```ejs
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

```ejs
{% blockquote 鲁迅, 致台静农  %}
我实在没有说过这样一句话。
{% endblockquote %}
```

{% blockquote 鲁迅, 致台静农  %}
我实在没有说过这样一句话。
{% endblockquote %}

### 框架

```ejs
{% iframe url [width] [height] %}
```

```ejs
{% iframe https://distortme.github.io/ %}
```

{% iframe https://distortme.github.io/ %}

### 图片

```ejs
{% asset_img [class names] slug [width] [height] [title text [alt text]] %}
```

```ejs
{% asset_img p1.png "验证戴维南定理的电路图" %}
```

{% asset_img p1.png "验证戴维南定理的电路图" %}

### 内部文章链接

```ejs
{% post_link filename [title] [escape] %}
```

```ejs
{% post_link Introduction-to-Markdown %}
```

{% post_link Introduction-to-Markdown %}

## `NexT`标签语法

### 居中引用

```ejs
{% cq %}Something{% endcq %}
```

```
{% cq %}Science and art, life in between. {% endcq %}
```

{% cq %}Science and art, life in between. {% endcq %}

### 视频

```ejs
{% video url %}
```

```ejs
{% video v1.mp4 %}
```

{% video v1.mp4 %}

### 按钮

```ejs
{% button url, text, icon [class], [title] %}
```

```ejs
欢迎大家访问我的 {% btn https://distortme.github.io/, 博客首页, home fa-fw fa-lg, 鼠标放上去显示这个 %} 哦！
```

欢迎大家访问我的 {% btn https://distortme.github.io/, 博客首页, home fa-fw fa-lg, 鼠标放上去显示这个 %} 哦！

### 组图

```ejs
{% gp [number]-[layout] %}
{% endgp %}
```

```ejs
{% gp 4-3 %}
{% asset_img p2.png %}
{% asset_img p3.png %}
{% asset_img p4.png %}
{% asset_img p5.png %}
{% endgp %}
```

{% gp 4-3 %}
{% asset_img p2.png %}
{% asset_img p3.png %}
{% asset_img p4.png %}
{% asset_img p5.png %}
{% endgp %}

### 标签

```ejs
{% label [class]@text %}
class: default | primary | success | info | warning | danger
```

```ejs
labels: {% label primary@primary %}, {% label success@success %}, {% label info@info %}, {% label warning@warning %} and {% label danger@danger %}, {% label default@default %}
```

labels: {% label primary@primary %}, {% label success@success %}, {% label info@info %}, {% label warning@warning %} and {% label danger@danger %}, {% label default@default %}

### 提醒

```ejs
{% note [class] [no-icon] [summary] %}
Any content (support inline tags too).
{% endnote %}
```

```ejs
{% note info %}
欢迎来到[我的博客](https://distortme.github.io)。
{% endnote %}
```

{% note info %}
欢迎来到[我的博客](https://distortme.github.io)。
{% endnote %}

```ejs
{% note primary 点击打开折叠部分 %}
这样很好玩，不是吗？
{% endnote %}
```

{% note primary 点击打开折叠部分 %}
这样很好玩，不是吗？
{% endnote %}

### 标签页

```ejs
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}
```

```ejs
{% tabs 默认名称, 2 %}
<!-- tab 修改名称 -->
当然可以。
<!-- endtab -->

<!-- tab -->
因为`index=2`所以你首先看到这个。
而且默认名称后面会加标签页的序号。
<!-- endtab -->

<!-- tab 显示图标@font -->
当然也可以。
<!-- endtab -->
{% endtabs %}
```

{% tabs 默认名称, 2 %}
<!-- tab 修改名称 -->
当然可以。
<!-- endtab -->

<!-- tab -->
因为`index=2`所以你首先看到这个。
而且默认名称后面会加标签页的序号。
<!-- endtab -->

<!-- tab 显示图标@font -->
当然也可以。
<!-- endtab -->
{% endtabs %}

### PDF

```ejs
{% pdf url [height] %}
```

```ejs
{% pdf t1.pdf %}
```

{% pdf t1.pdf %}


---
title: Introduction to Markdown
mathjax: true
date: 2023-11-25 23:29:37
categories:
- tech
tags:
- code
---

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

## 标签语法

{% asset_img p1.png 如果链接不正常怎么显示标题呢 %}


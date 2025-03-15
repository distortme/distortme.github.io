---
title: 文章语法
date: 2025-03-15 20:10:27
tags:
categories:
- 编程
---
这是一个按钮：{% btn https://github.com, GitHub, fab fa-github fa-fw fa-lg, GitHub %}，其代码如下：
```markdown
{% btn https://github.com, GitHub, fab fa-github fa-fw fa-lg, GitHub %}
```
{% note info 代码藏在里面 %}
### note 效果
```markdown
{% note info 代码藏在里面 %}
{% endnote %}
```
`(empty)|default|primary|info|success|warning|danger`
{% endnote %}
```markdown
{% pdf /pdf/physics.pdf 600px %}
```
{% pdf /pdf/physics.pdf %}
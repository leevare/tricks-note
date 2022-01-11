---
title: 横向滚动
---

## 横向滚动

有些网站滚动鼠标的时候网页是横向滚动，我们来实现一下。

<horizontal-scroll />

## 实现思路

首先，让容器出现横向滚动条，监听滚动容器的 `wheel` 事件，阻止滚动的默认行为，当鼠标滚动的时候，修改容器的 `scrollLeft` 值，值为鼠标滚动的偏移量。

## 实现代码

@[code vue:no-line-numbers](@components/horizontalScroll.vue)

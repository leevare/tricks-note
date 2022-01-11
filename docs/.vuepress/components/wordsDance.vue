<template>
  <div class="el" />
</template>

<script setup>
import * as d3 from 'd3';
import { onMounted } from 'vue';

onMounted(() => {
  const svg = d3.select('.el').append('svg').attr('width', 960).attr('height', 100).append('g');

  const words = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

  function update(data) {
    const t = d3.transition().duration(750);
    const text = svg.selectAll('text').data(data, (d) => d);

    // 进入时，可以在这里设置初始状态
    text
      .enter()
      .append('text')
      .attr('y', 100 / 2)
      .style('font-size', 18)
      .style('fill-opacity', 1e-6)
      .attr('dy', -50)
      .attr('fill', '#0f0')
      .attr('x', (d, i) => i * 32)
      .text((d) => d)
      .transition(t)
      .attr('dy', 0)
      .style('fill-opacity', 1);

    // 更新时，通过transition将进入时的状态或上一次的状态过渡到最新状态
    text
      .attr('fill', '#ccc')
      .transition(t)
      .attr('dy', 0)
      .style('fill-opacity', 1)
      .attr('x', (d, i) => i * 32);

    // 移除时，先执行过渡，过渡结束删除节点
    text.exit().attr('fill', '#f00').transition(t).attr('dy', 50).style('fill-opacity', 1e-6).remove();
  }

  update(words);

  // 定时重复执行更新，每两秒执行一次
  d3.interval(() => {
    update(
      d3
        .shuffle(words)
        .slice(0, Math.floor(Math.random() * 26))
        .sort(),
    );
  }, 2000);
});
</script>

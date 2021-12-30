<template>
  <div class="wrapper">
    <div class="box"></div>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  place-items: center;
}

.box {
  width: 200px;
  height: 200px;
  background: #aa00ff;
  border-radius: 8px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, hsl(300deg, 100%, 50%), hsl(200deg, 100%, 50%), hsl(100deg, 100%, 50%));
    border-radius: 8px;
    filter: blur(24px);
    z-index: -1;
  }
}
</style>

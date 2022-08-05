<template>
  <div class="main">
    <div class="first">
      <div>
        <slot></slot>
      </div>
    </div>
    <div class="second">
      <section class="f"></section>
      <section class="s">
        <span>地址：河北省石家庄市裕祥街26号</span>
        <span>版权所有：河北科技大学</span>
        <span>ICP备案号：冀IPC备05002802</span>
      </section>
    </div>
    <div class="second">
      <section class="f"></section>
      <section class="s">
        <span>邮政编码：050018</span>
        <span>邮箱：webmaster@hebust.edu.cn</span>
        <span>冀公网安备：13010802000638号</span>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 100%;
  height: 30vh;
  background-color: #9fbbe3;
  display: flex;
  justify-content: space-between;
  font-size: 2%;
}
.main div {
  width: 33%;
  height: 100%;
  /* background-color: azure; */
}
.main .first {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main .first div {
  width: 20vw;
  height: 10vh;
  /* background-color: black; */
}
.main .second {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.main .second .f {
  width: 1px;
  height: 33%;
  background-color: black;
}
.main .second .s {
  width: 95%;
  height: 50%;
  /* background-color: aqua; */
}
.s {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
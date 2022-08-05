<template>
  <div class="news">
    <section class="left">
      <h5 class="headline"><slot name="title"></slot></h5>
      <section class="word"><slot name="text"></slot></section>
      <span class="time"><slot name="time"></slot></span>
    </section>
    <!-- 插入图片 -->
    <section class="right">
      <aside class="pic"><slot name="pic"></slot></aside>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.news {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 33vw;
  height: 25vh;
  text-align: left;
  margin: 1vh;
  background-color: #fff;
  border-radius: 2vh;
  box-shadow: 0px 2px 6px 0px rgba(204, 204, 204, 60);
  font-family: Roboto;
  border: 1px solid rgba(249, 251, 252, 55);
}

.news .left {
  width: 65%;
  height: 100%;
  /* background-color: aqua; */
}
.news .right {
  width: 30%;
  height: 80%;
  /* background-color:red ; */
}
.news .left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news .left .headline {
  font-size: 8%;
  width: 120%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  z-index: 999;
}
.news .time {
  color: #bab6b6;
  font-size: 1%;
  transform: translateY(-20px);
}
/* 需要设置多行溢出 -----两行  但我没实现*/
.news .word {
  font-size: 6%;
  width: 100%;
  height: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.news .right {
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pic {
  overflow: hidden;
  width: 80%;
  height: 80%;
  border-radius: 10px;
}
/* end */
</style>
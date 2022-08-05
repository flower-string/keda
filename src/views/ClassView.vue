<template>
  <div class="banner w">
    <div>
      <div class="image2">
        <!-- 头像图片 -->
        <img :src="this.$store.state.stu.url" alt="" />
        <div class="name font2">
          <a href="#">{{ this.$store.state.stu.name }}</a>
        </div>
      </div>
      <ul>
        <!-- 这边字体和样板不一样 以后更改font2的css -->
        <div class="others font2">
          <span>学院</span> <span>{{ this.$store.state.stu.hcollege.collegeName }}</span>
        </div>
        <div class="others font2">
          <span>专业</span> <span>{{ this.$store.state.stu.hspecialty.specialtyName }}</span>
        </div>
        <div class="others font2">
          <span>班级</span> <span>{{ this.$store.state.stu.hclass.className }}</span>
        </div>
        <div class="others font2">
          <span>学号</span> <span>{{ this.$store.state.stu.studentid }}</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.w {
  width: 1440px;
  margin: auto;
}
.banner {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 56.25vw;
  min-width: 900px;
}
.image2 {
  text-align: center;
  width: 1080px;
  margin-top: 63px;
}
.image2 img {
  width: 145px;
  height: 145px;
  border: solid rgb(163, 163, 163) 2px;
  border-radius: 35%;
}

.font2 {
  font-size: 20px;
  font-weight: 520;
}
.others {
  height: 128px;
  line-height: 128px;
  display: flex;
  justify-content: space-between;
  padding: 0 160px;
}
</style>

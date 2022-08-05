<template>
  <div class="banner w">
    <!-- 分界线 -->
    <!-- 右边主体 -->
    <div>
      <div class="image2">
        <!-- 头像图片 -->
        <img :src="this.$store.state.stu.url" alt="" />
        <div class="name font2"><a href="#">更换头像</a></div>
      </div>
      <ul>
        <!-- 这边字体和样板不一样 以后更改font2的css -->
        <div class="others font2">
          <span>宿舍楼号</span>
          <span>{{ house.hhouseList.buildingNum }}</span>
        </div>
        <div class="others font2">
          <span>单元</span>
          <span>{{ this.$store.state.stu_house.unit }}</span>
        </div>
        <div class="others font2">
          <span>宿舍房号</span>
          <span>{{ house.dormitoryNo }}</span>
        </div>
        <div class="others font2">
          <span>床号</span>
          <span>{{ house.bed }}</span>
        </div>
        <div class="others font2">
          <span>宿管</span>
          <span>{{ house.hhouseList.dormManager }}</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      house : {

      }
    }
  },
  mounted() {
    this.$axios.get("/system/dormitory/token", {
      headers : {'Authorization' : this.$store.state.token}
    }).then((res) => {
      this.house = res.data.data;
      console.log(this.house)
    })
  }
};
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

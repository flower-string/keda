<template>
  <div class="banner">
    <!-- 分界线 -->
    <!-- 右边主体 -->
    <div>
      <div class="image2">
        <!-- 头像图片 -->
        <img :src="this.$store.state.stu.url" alt="头像图片" />
        <div class="change-head font2" @click="UpLoadImg()">更换头像</div>
      </div>
      <ul>
        <!-- 这边字体和样板不一样 以后更改font2的css -->
        <div class="others font2">
          <span>修改姓名</span>
          <span>{{ this.$store.state.stu.name }}</span>
        </div>
        <div class="others font2">
          <span>设置性别</span>
          <span>
            <input
              type="radio"
              class="gender"
              name="sex"
              v-model="sex"
              value="0"
            />
            女生
            <input
              type="radio"
              class="gender"
              name="sex"
              v-model="sex"
              value="1"
            />男生
          </span>
        </div>
        <div class="others font2">
          <span>电话号码</span>
          <span>{{ this.$store.getters.tel }}</span>
        </div>
        <div class="others font2">
          <span>电子邮箱</span>
          <!-- //缺一个邮箱隐藏的正则表达式,不会写，以后再说 -->
          <span>{{ this.$store.state.stu.email }}</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sex: this.$store.state.stu.sex,
    };
  },
  methods:{
    UpLoadImg(){
      this.$axios.post("/talent/oss/file/avatar/img",{
        headers : {'Authorization' :  this.$store.state.token},
      }).then(() => {
        console.log("请求成功")
      })
    }
  }
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  max-width: 1080px;
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
.change-head {
  margin-top: 42px;
  text-align: center;
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
.gender {
  width: 30px;
  height: 30px;
  padding-left: 50px;
}
</style>

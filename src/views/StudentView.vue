<template>
  <div>
    <el-container style="padding:0">
      <el-header height='25vh' style="padding:0">
        <!-- 最上部的logo和位置 -->
        <div class="top">
          <div class="pho"><img src="https://www.hebust.edu.cn/images/logo_01.png" alt=""></div>
          <div>
            <el-breadcrumb separator=">">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>{{ActiveRouter}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
        <!-- 头像等基本信息 -->
        <div class="tou">
          <div class="picture">
            <img :src="this.$store.state.stu.url" alt="">
          </div>
          <div class="user-text">
            <b>{{this.$store.state.stu.name}}</b>
            <b><i class="el-icon-phone"> {{this.$store.getters.tel}} </i></b>
          </div>
        </div>
      </el-header>
      <el-main>
        <el-container>
          <el-aside width="350px">
            <nav>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/me'" @click.native="ChangeActiveRouter('个人资料')">个人资料</router-link>
              <hr>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/message'" @click.native="ChangeActiveRouter('消息中心'),RemoveMessage()">
                <el-badge :value="this.$store.state.noReadCount">
                  消息中心
                </el-badge>
              </router-link>
              <hr>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/history'" @click.native="ChangeActiveRouter('浏览记录')">浏览记录</router-link>
              <hr>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/collection'" @click.native="ChangeActiveRouter('我的收藏')">我的收藏</router-link>
              <hr>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/house'" @click.native="ChangeActiveRouter('我的住宿信息')">我的住宿信息</router-link>
              <hr>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/class'" @click.native="ChangeActiveRouter('我的班级信息')">我的班级信息</router-link>
              <hr>
              <router-link :to="'/student/' + this.$store.state.stu.studentid + '/feedback'" @click.native="ChangeActiveRouter('反馈与建议')">反馈与建议</router-link>
            </nav>
            <button class="exit-btn" @click="GoHome()">退出登录</button>
          </el-aside>
          <el-main>
            <keep-alive>
              <router-view/>
            </keep-alive>
          </el-main>
        </el-container>
      </el-main>
      <el-footer style="padding:0">
        <Bottom>
          <img src="https://www.hebust.edu.cn/images/logo_01.png" alt="">
        </Bottom>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Bottom from '@/components/Bottom'

export default {
  name: 'student',
  components:{
    Bottom,
  },
  data () {
    return {
      ActiveRouter: '个人资料',
      stu_tel: this.$store.getters.tel,
      messageNumber:3,
      noReadCount: 0,
    }
  },
  methods: {
    ChangeActiveRouter(text){
      this.ActiveRouter = text;
    },
    GoHome(){
      this.$router.replace('/login')
    },
    RemoveMessage(){
      this.$store.commit('getNoReadCount',0)
    }
  },
  mounted() {
    this.$axios.get('/system/info/list',{
      paramas: this.$store.state.stu,
      headers: {"Authorization" : this.$store.state.token}
    }).then((res) => {
      for (let i = 0 ; i <= res.data.rows.length ; i++){
        if(res.data.rows[i].isRead === false){
          this.noReadCount++;
        }
      }
      this.$store.dispatch('ToUpData',
          { foo : 'getNoReadCount' , text: this.noReadCount})
    })
  }
}
</script>

<style scoped>
.el-header{
    height: 40vh;
    padding: 0;
    box-sizing: border-box;
    flex-shrink: 0;
}

.top{
  height: 15vh;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  position: relative;
}

.top .pho{
  position: absolute;
  left: 30px;
  bottom: 15px;
}

.top div{
  margin-right: 40px;
}

.tou{
  width: 30vw;
  height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tou .picture{
  width: 13vh;
  height: 13vh;
  margin-top: 25px;
  border-radius: 35%;
  border: 2px solid rgb(163, 163, 163);
}

.tou .picture img{
  width: 100%;
  height: 100%;
  border-radius: 35%;
}

.user-text{
  display: flex;
  height: 15vh;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  padding-top: 25px;
  font-size: 20px;
}

nav {
  height: 70%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

a {
  width: 15vw;
  height: 10vh;
  line-height: 10vh;
  font-size: 1.5vw;
  font-weight: 400;
  color: #2c3e50;
  text-align: left;
}

 a:hover,.exit-btn:hover{
  cursor: pointer;
}

 a.router-link-exact-active {
  color: skyblue;
  text-decoration:underline;
  border-bottom: 2px solid rgb(174, 173, 173);
}

.exit-btn{
  width: 50%;
  height: 6vh;
  background-color: rgb(77, 169, 230);
  border-radius: 10px;
}

.el-aside{
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 120vh;
}

.el-main .el-container{
  margin-top: 3vh;
}

.el-main .el-container .el-main{
  background-color: white;
}
</style>

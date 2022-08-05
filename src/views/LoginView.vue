<template>
  <div class="main">
    <img src="https://www.hebust.edu.cn/images/2021-06/912b711512de4a0db756dc50ef6e9a79.jpg" alt="">
    <!-- 蓝色遮罩 -->
    <div class="blue"></div>
    <div class="box">
      <!-- 左半边 -->
      <div class="left">
        <img src="https://www.hebust.edu.cn/xqzl/687_1606291682201.jpg" alt="" class="bg">
        <img src="https://www.hebust.edu.cn/images/logo_01.png" alt="">
        <div>
          <i class="el-icon-caret-right"></i>
        </div>
      </div>
      <!-- 右半边 -->
      <div class="right">
        <div class="text">
          <div class="sp">欢迎使用</div>
          <div>
            <b>科大迎新系统</b>
          </div>
        </div>
        <form class="from">
          <div><b>账号：</b><input type="text" value="" class="input" placeholder="请输入账号" v-model='from.username'></div>
          <div><b>密码：</b><input type="password" name="" id="" value="" class="input" placeholder="请输入密码" v-model="from.password"></div>
          <div><el-button type="primary" round @click="Submit">立即登录</el-button></div>
          <div><input type="checkbox">记住密码</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name:'login',
  data () {
    return {
      from:{
        code:'',
        username:'admin',
        password:'admin123',
        uuid:''
      },
      flag:false,
      id:123,
    }
  },
  watch: {

  },
  methods: {
    Submit() {
      // 到时候正则表达式要改
      const exp1 = /admin/;
      const exp2 = /admin123/;
      let flag1 = exp1.test(this.from.username);
      let flag2 = exp2.test(this.from.password);
      if(flag1 && flag2){
        this.$axios.post('/login',this.from)
        //this.$axios.请求类型（“请求接口路径”,请求参数）、then(请求成功后执行的函数).catch(q请求失败后执行的函数)
        .then((res) => {
          this.$store.dispatch('ToUpData',{foo : 'GetToken' , text : res.data.token});
          this.$axios.get('/system/info/token',{
            headers: { Authorization : this.$store.state.token }
          })
          .then((res) => {
            // console.log(res.data.data);
            this.$store.dispatch('ToUpData',{foo: 'UpDataStu' , text: res.data.data});
            this.$router.push(`/student/${this.$store.state.token}`);
          })
        }).catch(err => console.log("出错了",err))
      } else {
        alert("账号或密码不符合规范！")
      }
    }
  },
}
</script>

<style scoped>
  .main{
    width: 100vw;
    height: 100vh;
  }

  .box{
    width: 90vw;
    height: 90vh;
    position: fixed;
    top: 5vh;
    left: 5vw;
  }

  .left img{
    width: 20vw;
    height: 8vh;
    position: absolute;
    left: 3vw;
    top: 5vh;
  }

  .blue{
    background-color: rgb(34, 34, 190);
    width: 25vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
  }

  .right{
    width: 45vw;
    height: 90vh;
    background-color: white;
    position: fixed;
    right: 5vw;
  }

  .left{
    width: 45vw;
    height: 90Vh;
    background-color: rgb(204, 205, 202);
    position: fixed;
    left: 5vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left .bg{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    /* filter: grayscale(); */
  }

  .left div{
    width: 50px;
    height: 50px;
    border: 1px solid blue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    z-index: 2;
  }

  .el-icon-caret-right{
    font-size: 20px;
  }

  .text{
    position: absolute;
    top: 10vh;
    text-align: left;
    left: 2vw;
    font-size: 3vw;
    color: rgb(49, 49, 237);
  }

 .from{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    position: absolute;
    left: 2vw;
    top:30vh;
    height: 35vh;
  }

  .input{
    width: 30vw;
    height: 5vh;
    border-radius: 2.5vh;
    border: 1px solid rgb(199, 194, 194);
    text-indent:15px;
  }

  .el-button{
    width: 40vw;
  }
</style>

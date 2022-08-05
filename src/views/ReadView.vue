<template>
  <div>
    <div class="top">
      <div class="pho"><img src="https://www.hebust.edu.cn/images/logo_01.png" alt=""></div>
      <div>
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <header>
        <div class="tt"> {{this.$store.state.Reading.title}} </div>
        <div class="xia">
          <div>发布时间{{this.$store.state.Reading.createTime}}</div>
          <div>浏览次数：{{this.$store.state.Reading.time}}</div>
        </div>
      <div class="two">
        <div>❤</div>
        <div>收藏</div>
      </div>
    </header>
    <main>
      <div class="left">
        <div>
          <img :src="this.$store.state.Reading.titleImgUrl" alt="">
        </div>
        <div> {{ this.$store.state.Reading.content }} </div>
      </div>
      <div class="right">
        <div>
          <div align="left"><b>最新文章</b></div>
          <ul>
            <li ></li>
          </ul>
          <div>换一批</div>
        </div>
        <div>
          <div align="left"><b>热点文章</b></div>
          <ul>
            <li></li>
          </ul>
          <div>换一批</div>
        </div>
      </div>
    </main>
    <Bottom>
      <img src="https://www.hebust.edu.cn/images/logo_01.png" alt="">
    </Bottom>
  </div>
</template>

<script>
  import Bottom from "@/components/Bottom";
  export default {
    name: "ReadView",
    data(){
      return{
        list1:[],
        list2:[],
      }
    },
    methods: {

    },
    components:{
      Bottom,
    },
    mounted() {

    }
  }
</script>

<style scoped>
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
    border: 2px solid rgb(196, 188, 188);
  }

  .tou .picture img{
    width: 100%;
    height: 100%;
    border-radius: 35%;
  }

  header{
    background-color: rgba(229, 228, 228, 0.32);
    height: 20vh;
    display: grid;
    grid-template-columns: 5fr 2fr;
    grid-template-rows: 1fr 1fr;
    font-size: 22px;
  }


  .tt{
    grid-column: 1 / 3;
    align-self: center;
    font-size: 26px;
    font-weight: 700;
  }

  .xia{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    font-size: 18px;
    transform: translateY(20px);
  }
  main{
    background-color: white;
    height: 150vh;
    display: grid;
    grid-template-columns: 7fr 2fr;
  }
  .left {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px;
    font-size: 18px;
    border-right: 1px solid rgba(0, 0, 0, 0.42);
  }

  .left div{
    text-align: left;
    text-indent: 2em;
  }
  .right{
    display: grid;
  }

  .right>div{
    display: grid;
    grid-template-rows: 1fr 5fr 1fr;
    margin: 10px;
    margin-top: 25px;
    font-size: 18px;
  }
</style>

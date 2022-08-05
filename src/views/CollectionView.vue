<template>
  <div class="main">
<!--    <button @click="text">测试</button>-->
    <div class="content">
      <div class="card">
        <Card01 v-for="item in tableData" @click.native="getarticle(item.id)">
          <span slot="title">{{ item.title }}</span>
          <span slot="text">{{ item.content }}</span>
          <span slot="time">{{ item.createTime }}</span>
          <span slot="pic">
            <img :src="item.titleImgUrl" alt="这里是图片"/>
          </span>
        </Card01>
      </div>
    </div>
    <div class="page">
      <el-pagination
        background
        @current-change="currentChange"
        :current-page="page"
        :page-size="size"
        layout="total, prev, pager, next, jumper"
        :total="collections.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Card01 from "@/components/Card01";

export default {
  data() {
    return {
      page: 1, //第几页
      size: 8, //一页多少条
      tableData: [], //当前页面绑定的数据
      collections: [
        // {
        //     title : '111',
        //     content : 'content',
        //     createTime : "createTime",
        //     titleImgUrl : "titleImgUrl"
        // },
        // {
        //   title : null,
        //   content : null,
        //   createTime : null,
        //   titleImgUrl: null
        // }
      ],
      temp:[]
    };
  },
  components: {
    Card01,
  },
  methods: {
    // text(){
    //   console.log(this.collections)
    // },
    getTabelData() {
      //allData为全部数据
      this.tableData = this.collections.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
      this.total = this.collections.length;
      // console.log("切割后的数组为",this.tableData)
    },
    getTabelData2() {
      let data = JSON.parse(JSON.stringify(this.collections));
      this.tableData = data.splice((this.page - 1) * this.size, this.size);
      this.total = this.collections.length;
    },
    //page改变时的回调函数，参数为当前页码
    currentChange(val) {
      this.page = val;
      this.getTabelData();
    },
    getarticle(id){
      this.$axios.get("/system/article/" + id,{
        headers: {'Authorization' : this.$store.state.token}
      }).then((res) => {
        console.log("获取文章详细信息",res);
        this.$axios.post('/system/history/' + id).then( ()=> {
          this.$store.commit('upDataReading',res);
          this.$router.push('/read');
          // alert('添加记录');
        })
      })
    }
  },
  async mounted() {
    await this.$axios.get("/system/collect/user",{
      headers: {'Authorization' : this.$store.state.token}
    }).then((res) => {
      // this.collections = res.data.rows;
      this.temp = res.data.rows;
      for (let i = 0 ; i < res.data.rows.length ; i++){
        const o = {};
        this.$set(o,'title',this.temp[i].title);
        this.$set(o,'content',this.temp[i].content);
        this.$set(o,'createTime',this.temp[i].createTime);
        this.$set(o,'titleImgUrl',this.temp[i].titleImgUrl);
        this.collections.push(o);
      }
    })
    await this.getTabelData();
  },
};
</script>

<style scoped>
/* 与上消息中心的css样式完全一样 */
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100%;
  background-color: #ffffff;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.content {
  display: flex;
  width: 100%;
  height: 100%;
  /* background-color: beige; */
  align-content: space-between;
  animation: moveUp .8s linear;
}
.page {
  position: absolute;
  bottom: 20px;
  right: 20px;
  /* margin-top: 1vh;
    align-self: flex-end;
    display: flex;
     justify-content: end;
    text-align: center;
    overflow: hidden;
    margin-right: 4vw;
    height: 9%;   */
}
/* -end */
.card {
  display: flex;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  width: 70vw;
  height: 80vh;
}

.card div:nth-child(2n){
  transform: translateY(1vh);
}

@keyframes moveUp {
  0%{
    transform: translateY(100vh);
  }
  60%{
    transform: translateY(-10vh);
  }
  80%{
    transform: translateY(10vh);
  }
  100%{
    transform: translateY(0);
  }
}
</style>

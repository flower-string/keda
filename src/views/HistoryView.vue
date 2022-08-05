<template>
  <div class="main">
    <div class="content">
      <div class="card">
        <Card01 v-for="item in tableData" @click.native="getarticle(item.id)">
          <span slot="title">{{ item.title }}</span>
          <span slot="text">{{ item.content }}</span>
          <span slot="time">{{ item.createTime }}</span>
          <span slot="pic">
            <img :src="item.titleImgUrl" alt="" />
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
        :total="total"
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
      total: 0, //总条目数
      tableData: [], //当前页面绑定的数据
      historys: [],
    };
  },
  components: {
    Card01,
  },
  methods: {
    getTabelData() {
      this.tableData = this.historys.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
      this.total = this.historys.length;
    },
    getTabelData2() {
      let data = JSON.parse(JSON.stringify(this.historys));
      this.tableData = data.splice((this.page - 1) * this.size, this.size);
      this.total = this.historys.length;
    },
    //page改变时的回调函数，参数为当前页码
    currentChange(val) {
      this.page = val;
      this.getTabelData2();
    },
    getarticle(id){
      this.$axios.get("/system/article/" + id,{
        headers: {'Authorization' : this.$store.state.token}
      }).then((res) => {
        // console.log("获取文章详细信息",res);
        this.$axios.post('/system/history/' + id).then(()=> {
          console.log(res.data.data)
          this.$store.commit('upDataReading',res.data.data);
          this.$router.push('/read');
          alert('添加记录');
        })
      })
    }
  },
  mounted() {
    this.$axios.get("/system/history/user",{
      headers: {"Authorization" : this.$store.state.token}
    })
    .then((res) => {
      console.log(res.data.rows)
      this.total = res.data.rows.length;
      // this.historys = res.data.rows;
      for (let i = 0 ; i < res.data.rows.length ; i++){
        this.historys.push(res.data.rows[i].harticleVo)
      }
      // console.log("浏览记录",this.historys);
      this.getTabelData();
      console.log(this.tableData[0])
    })
  },
};
</script>

<style scoped>
/* 与上消息中心的css样式完全一样 */
.main {
  padding: 0;
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
  width: 100%;
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

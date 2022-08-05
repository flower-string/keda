<template>
  <div class="main">
    <div class="content">
      <ul>
        <li v-for="item in tableData">
          <div>
            <h5>{{ item.title }}</h5>
            <span>{{ item.text }}</span>
          </div>
        </li>
      </ul>
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
export default {
  data() {
    return {
      page: 1, //第几页
      size: 5, //一页多少条
      total: 0, //总条目数
      tableData: [], //当前页面绑定的数据
      messages: [],
    };
  },
  methods: {
    getTabelData() {
      //allData为全部数据
      this.tableData = this.messages.slice(
        (this.page - 1) * this.size,
        this.page * this.size
      );
      this.total = this.messages.length;
    },
    getTabelData2() {
      let data = JSON.parse(JSON.stringify(this.messages));
      this.tableData = data.splice((this.page - 1) * this.size, this.size);
      this.total = this.messages.length;
    },
    //page改变时的回调函数，参数为当前页码
    currentChange(val) {
      this.page = val;
      this.getTabelData2();
    },
  },
  mounted() {
    this.$axios.get('/system/info/list',{
      paramas: this.$store.state.stu,
      headers: {"Authorization" : this.$store.state.token}
      })
      .then((res) => {
        console.log("消息获取成功",res.data.rows);
        this.total = res.data.total;
        this.messages = res.data.rows;
        this.getTabelData2();
        })
      .catch((err) => console.log(err))
  },
};
</script>

<style scoped>
.main {
  padding-top: 4vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  position: relative;
}
.content {
  display: flex;
  width: 89%;
  height: 80%;
  /* background-color: beige; */
  align-content: space-between;
  text-align: left;
}
.content ul {
  height: 60vh;
  display: flex;
  align-content: space-between;
  flex-wrap: wrap;
}
h5 {
  font-size: 2vh;
  font-weight: 400;
  margin-bottom: 2vh;
}
span {
  font-size: 2vh;
  display: block;
  width: 40vw;
  margin-bottom: 2vh;
  padding-left: 1vh;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #cecece;
}
.page {
  /* margin-top: 1vh;
    margin-right: 4vw;
    height: 9%;   */
  position: absolute;
  bottom: 20px;
  right: 20px;
}
</style>

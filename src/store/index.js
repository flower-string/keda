import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'这里是请求头',
    noReadCount: 0,
    Reading: {
      title: '',
      content: '',
      createTime: '',
      titleImgUrl: '',
    },
    stu_house:{
      BuildingNumber:'1号楼',
      unit:'A单元',
      HouseNumber:'303',
      BedNumBer:'4号床',
      Tubes:'李四'
    },
    stu_picUrl:'https://tse1-mm.cn.bing.net/th/id/R-C.83b14f7388fed2b2135288087f1a3de8?rik=DkRlqSITn8dJCw&riu=http%3a%2f%2ftupian.sioe.cn%2fuploadfile%2fsmall%2f201401171d16157320%2f300x300.jpg&ehk=kofsGSsw29uDsOiGDrKvBtz3QGB0mN3CPCZ6vjnthbo%3d&risl=&pid=ImgRaw&r=0',
    stu: {

    }
  },
  getters: {
    tel(state){
      return state.stu.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
    }
  },
  mutations: {
    GetToken(state,data){
      state.token = data;
    },
    UpDataStu(state,data){
      state.stu = data;
    },
    getNoReadCount(state,data){
      state.noReadCount = data;
    },
    upDataReading(state,data){
      state.Reading = {
        title: data.title,
        content: data.content,
        time: data.createTime,
      }
    }
  },
  actions: {
    ToUpData(content,data){
      content.commit(data.foo,data.text);
    }
  },
  modules: {

  }
})

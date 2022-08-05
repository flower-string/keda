<template>
  <div class="box">
    <textarea
      cols="30"
      rows="20"
      maxlength="500"
      placeholder="描述问题的详细信息，有利于我们快速帮您解决（必填）"
      v-model="text"
    >
    </textarea>
    <el-button @click="submit()">提交</el-button>
    <el-upload
      class="upload-demo"
      :action='"http://47.107.246.17:8111/talent/oss/file/img/" + feedBackId'
      :headers="{ 'Authorization' : token}"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      accept=".jpeg,.png,.jpg,.bmp,.gif"
      :multiple=IsDuoXu
      :limit=fileLimit
      @on-success='successUp(res,file,fileArr)'
      @on-error='errorUp(err,file,fileArr)'
    >
      <div class="plus">
        <i class="el-icon-plus"></i>
      </div>
      <div slot="tip" class="el-upload__tip">
        上传图片
      </div>
    </el-upload>
    <div class="number">
      {{text.length}} / 500
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      text: "",
      fileLimit: 6,
      IsDuoXu: true,
      IsTodayCanUp:true,
      feedBackId:this.$store.state.stu.id,
      token: this.$store.state.token
    };
  },
  methods: {
    submitUpload() {
      this.$refs.upload.submit();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    successUp(res,file,fileArr){
      console.log(file + '上传成功');
    },
    errorUp(err,file,fileArr){
      console.log(file + '上传失败');
    },
    submit(){
      if(this.text.length != 0){
        if(new Date() - localStorage.getItem('timer') > 24 * 60 * 60){
          this.$axios.post('/system/feedback/add/feedback',this.text)
              .then(() => {
                const a = new Date();
                localStorage.setItem("timer",a);
                alert('请求成功')
              });
        } else {
          alert("最近提交过一次了")
        }
      } else {
        alert("反馈内容不能为空");
      }
    }
  },
};
</script>

<style scoped>
.box {
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid rgb(204, 201, 201);
}

textarea {
  resize: none;
  width: 70%;
  height: 90%;
  position: absolute;
  left: 5%;
  top: 5%;
  font-size: 25px;
  border: none;
  outline: none;
}

.el-button {
  position: absolute;
  right: 5%;
  top: 5%;
  width: 120px;
  height: 50px;
}

.upload-demo {
  position: absolute;
  left: 8%;
  bottom: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 12vw;
  height: 12vw;
  color: gainsboro;
  box-shadow: 1px 1px 1px gainsboro;
  border-radius: 5px;
}

.upload-demo .plus{
  width: 4vw;
  height: 4vw;
  border: 2px solid gainsboro;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-upload__tip,.el-icon-plus{
  font-size: 20px;
  color: gainsboro;
}

.number{
  position: absolute;
  right: 8%;
  bottom: 8%;
  color: gainsboro;
  font-size: 30px;
}
</style>

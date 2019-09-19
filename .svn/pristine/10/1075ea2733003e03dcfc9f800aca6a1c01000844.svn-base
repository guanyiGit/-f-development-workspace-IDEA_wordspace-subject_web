<template>
  <div class="el-file">
    <el-upload
      ref="imgupload"
      :action="uploadUrl"
      multiple
      drag
      :data="uploadData"
      show-file-list
      :limit="limit"
      :auto-upload='false'
      list-type="picture-card"
      :on-preview="previewHandle"
      :on-error="errorHandle"
      :on-success="successHandle"
      :on-remove="removHandlee"
      :on-exceed="maxFileHandle"
      :on-change="changeHandle">
      <div class="el-upload__text cont-icon" slot="trigger">
        <i class="el-icon-plus icon"></i>
      </div>
      <div class="el-upload__text" slot="tip">
        &nbsp;&nbsp;<i class="el-icon-plus"></i>当前 <b>{{fileList.length}}</b> 个(最多 <b>{{limit}}</b> 个)
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="item.url" :alt="item.name"
           v-if="fileList && fileList.length>0"
           v-for="(item,index) in fileList" :key="index">
    </el-dialog>
  </div>
</template>
<script>
  export default {
    name: "upload",
    data() {
      return {
        fileList: [],
        dialogVisible: false,
        cb:'',
        cleanFile:''
      };
    },
    props: {
        limit:{
            type: Number,
            default: () => 4
        },
        uploadUrl:{
            type: String,
            default: function (){
                return this.$axios.defaults.baseURL+'/file/upload/batch';
            }
        },
        uploadData:{
            type: Object,
            default: function (){
                return { }
            }
        }
    },
    methods: {
      removHandlee(file, fileList) {
        // console.log(file, fileList);
      },
      errorHandle(err, file, fileList){
          err = {meg:err,success:false}
          if(this.cb) this.cb(err)
          if(this.cleanFile) this.$refs.imgupload.clearFiles()
      },
      successHandle(response, file, fileList) {
          response.success = true
          if(this.cb) this.cb(response)
          if(this.cleanFile) this.$refs.imgupload.clearFiles()
      },  
      previewHandle(file) {
          this.dialogVisible = true;
          console.log(file)
      },
      maxFileHandle() {
          this.$alert('上传文件过多', '上传提示')
      },
      changeHandle(file, fileList) {
          this.fileList = fileList;
      },
      upload(cb,cleanFile){
          this.$refs.imgupload.submit();
          this.cb = cb;
          this.cleanFile = cleanFile;
      }
    },
  }
</script>

<style scoped>
  .icon {
    font-size: 60px;
    vertical-align: middle;
  }
  .el-file{
    border: 1px dashed #aaa;
  }


</style>
<style type="text/css" >
  .el-file .el-upload-dragger{
      width: 162px;
      height: 100%;
  }
</style>

<template>
  <div class="settings">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card shadow="never">
      <el-form label-width="100px">
        <el-form-item label="应用名称:">
          <el-input v-model="appName"></el-input>
        </el-form-item>

        <el-form-item label="数据PAI地址:">
          <el-input v-model="apiUrl"></el-input>
        </el-form-item>

        <el-form-item label="管理后台地址:">
          <el-input v-model="adminUrl"></el-input>
        </el-form-item>

        <el-form-item label="客户APP地址:">
          <el-input v-model="appUrl"></el-input>
        </el-form-item>

        <el-form-item label="ICP备案号">
          <el-input v-model="icp"></el-input>
        </el-form-item>

        <el-form-item label="版权声明:">
          <el-input v-model="copyright"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="doSubmit">提交</el-button>
            <el-button @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        appName:'',
        apiUrl:'',
        adminUrl:'',
        appUrl:'',
        icp:'',
        copyright:''
    }
  },
  mounted(){
      //将$store存储中的全局配置数据赋值给中间变量-formDate方便表单元素执行双向数据绑定
      //应用复制，两个变量指向对一个对象
      //this.formDate=this.$store.state.globalSetting;
      //对象复制
      //this.formDate=JSON.parse(JSON.stringify(this.$store.state.globalSetting));
      this.formDate={};
      this.appName=this.$store.state.globalSetting.appName;
      this.apiUrl=this.$store.state.globalSetting.apiUrl;
      this.adminUrl=this.$store.state.globalSetting.adminUrl;
      this.appUrl=this.$store.state.globalSetting.appUrl;
      this.icp=this.$store.state.globalSetting.icp;
      this.copyright=this.$store.state.globalSetting.copyright;
  },
  methods:{
    doSubmit(){
        var url=this.$store.state.globalSetting.apiUrl+'/admin/setting';
        var data={
          appName:this.appName,
          apiUrl:this.apiUrl,
          adminUrl:this.adminUrl,
          appUrl:this.appUrl,
          icp:this.icp,
          copyright:this.copyright,
        }
        this.$axios.put(url,data).then((res)=>{
          if(res.data.code==200){
            this.$message.success('全局设置修改成功! ');
            ///TODO：修改$store中的全局设置!!!
          }else{
            this.$message.error('全局设置修改失败! ')
          }
        }).catch((err)=>{
          console.log(err);
        })
    },
    doCancel(){
      //this.formDate=JSON.parse(JSON.stringify(this.$store.state.globalSetting));
       this.formDate={};
      this.appName=this.$store.state.globalSetting.appName;
      this.apiUrl=this.$store.state.globalSetting.apiUrl;
      this.adminUrl=this.$store.state.globalSetting.adminUrl;
      this.appUrl=this.$store.state.globalSetting.appUrl;
      this.icp=this.$store.state.globalSetting.icp;
      this.copyright=this.$store.state.globalSetting.copyright;
    }
  }
};
</script>

<style scoped>

</style>
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
    export default {
        mounted(){
            //当前组件挂载完成后需要异步请求全局设置
            var url=this.$store.state.globalSetting.apiUrl+'/admin/setting';

            this.$axios.get(url).then((res)=>{
                this.$store.commit('setGlobalSetting',res.data); //将全局配置存储到vuex存储仓库中          
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
</script>

<style lang="scss">
#app{
  color:#303133;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>

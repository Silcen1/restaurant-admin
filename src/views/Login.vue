<template>
    <div class="login">
       <el-card class="xfn-login-card">
           <div slot="header">管理员登录</div>
              <div>
                  <el-form label-width="100px">

                      <el-form-item label="管理员名: ">
                         <el-input v-model="formDate.aname" placeholder="请输入管理员名"></el-input>
                      </el-form-item>

                       <el-form-item label="登录密码: ">
                         <el-input type="password" v-model="formDate.apwd" placeholder="请输入管理员密码"></el-input>
                      </el-form-item>
                        
                        <el-form-item>
                            <el-button type='primary' @click="doLogin">登录</el-button>
                            <el-button @click="doCancel">取消</el-button>
                        </el-form-item>
                  </el-form>
                </div>
       </el-card>
       {{$store.state.globalSetting}}
    </div>
</template>

<script>
    export default {
        data(){  //普通组件
            return{
                formDate:{ //表单中用户输入的两个数据
                    aname:'admin',
                    apwd:'123456'
                }
            }
        },
        methods:{
            doLogin(){  //执行登录 
               var url=this.$store.state.globalSetting.apiUrl+`/admin/login/${this.formDate.aname}/${this.formDate.apwd}`;
               console.log(url);

               this.$axios.get(url).then((res)=>{
                   if(res.data.code==200){  //登录成功
                   //把用户名存入vuex存储仓库
                   this.$store.commit('setAdminName',this.formDate.aname);
                    //执行视图跳转
                       this.$router.push("/main")
                   }else{  //登录失败
                        this.$alert('用户名或密码错误','登录失败!',{type:"infp"}).then(()=>{}).catch(()=>{})
                   }
                   console.log(res.data)
                   console.log(res.data)
               }).catch((err)=>{
                   console.log(err);
               })
            },
            doCancel(){ //清除用户的输入
                 this.formDate.aname='';
                 this.formDate.apwd='';
            }
        }
    }
</script>

<style lang="scss">
 .xfn-login-card{
     width:450px;
     margin:100px auto;

     .el-card__header{
        text-align: center;
        font-size:1.2em;
     }
 }

</style>
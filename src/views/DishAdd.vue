<template>
    <div>
        <h1>添加菜品</h1>

        <el-form label-width="100px">
            <el-form-item label="菜品图片: ">
               <el-upload class="xfn-uploader" :action="uploadAction" :on-success="doUploadSuccess" name="dishImg" :show-file-list="false">
                   <img v-if="imageUrl" :src="imageUrl" alt="">
               </el-upload>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                imageUrl:'',   //要显示的预览
                uploadAction:this.$store.state.globalSetting.apiUrl+'/admin/dish/image',
                formData:{
                    title:'',
                    imageUrl:'',        //菜品图片在服务器上的文件名称
                    price:'',
                    detail:'',
                    categoryId:''
                }
            }
        },
        methods:{
            doUploadSuccess(res,file){
             //文件上传成功后，客户端得到响应消息后之后处理函数
             //res:服务器端返回的响应消息
             //file:从 INPUT[type=file]中读取的第一个上传文件对象
             this.formData.imageUrl=res.fileName;
             this.imageUrl=URL.createObjectURL(file.raw);
             //把上传文件编码为DateURL字符串
            }
        }
    }
</script>

<style lang="scss">
.xfn-uploader{
    .el-upload{
        border:1px dotted #aaa;
        border-radius: 3px;
        cursor: pointer;
        width:250px;
        height:177px;
        overflow: hidden;
        &:hover{
            border-color:#409EFF;
        }
    }
    img{
        max-width:100%;
    }
}
</style>
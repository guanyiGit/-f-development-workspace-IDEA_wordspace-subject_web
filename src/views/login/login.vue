<template>
    <div class="div_max" style="display: flex;align-content: center;
    justify-content: center; width: 100%;height: 900px;
    ">
        <div style="width: 300px;height: 300px;margin-top: 300px;margin-left: 30px;">
            <p style="margin-left: 100px;">登陆</p>
            账号：<input v-model="name" style="width: 260px;"/><br/><br/>
            密码：<input type="password" v-model="password" style="width: 260px;"/><br/>
            <button type="bottom" @click="login" style="border-radius:5px 5px 5px 5px;
        color: #fffefe;margin-top: 20px;background-color: #33ccff;width: 260px;">登陆</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                name:''
                ,password:''
            }
        },created(){
        }
    ,methods:{
            login(){
                var _this=this;
                if(this.name==null||this.name==''){
                    this.$message("请输入姓名")
                    return;
                }else if(this.password==null||this.password==''){
                    this.$message("请输入密码")
                    return;
                }
                this.$axios({
                    method: 'get',
                    url: '/biz/login',
                    params: {"name":this.name,"password":this.password}
                }).then((res) => {
                    if(res.code=='200'){
                        _this.$message.success("登陆成功")
                        setCookie("userId",res.obj.userId)
                        setCookie("username",res.obj.username)
                        _this.$router.push({name:'home'})
                    }else {
                        _this.$message(res.msg)
                    }
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }
    //写cookies
    function setCookie(name,value)
    {
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
    }
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    function delCookie(name)
    {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval=getCookie(name);
        if(cval!=null)
            document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
</script>

<style scoped>
.div_max{
    background: url("../../assets/t006.png")no-repeat center center/100% 100%;
    /*background: url("http://img.netbian.com/file/2019/0615/7b5783294c6e91b6125277c43f8c2d9c.jpg")no-repeat center center/100% 100%;*/
    color: #fffefe;
}
</style>
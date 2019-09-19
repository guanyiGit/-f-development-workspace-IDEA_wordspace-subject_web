<template>
    <div class="layout_top">
        <ul class="ul">
            <li class="logo">
                <img src="../../assets/logo.png" alt="">
                <span>活动管理平台</span>
            </li>
            <li class="singOut">
                <img src="../../assets/signOut.png" alt="">
                <span @click="loulogin">注销</span>
            </li>
            <li class="amdin">
                <img src="../../assets/user.png" alt="">
                <span>{{username}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Top",data(){
            return{
                username:''
            }

        },created(){
            this.username=getCookie("username");
            console.log("Top.username"+this.username)

        },methods:{
            loulogin(){
                delCookie("username")
                delCookie("userId")
                this.$message.error("退出成功")
                console.log("退出后"+getCookie("username"))
                this.$router.push({name:'login'})
            }
        }
    }
    function getCookie(name)
    {
        var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    function delCookie(name){
        var Days = 30;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days*24*60*60*1000);
        document.cookie = name + "="+ escape ("") + ";expires=" + exp.toGMTString();

    }
</script>

<style lang="scss" scoped>
    .layout_top {
        width: 100%;
        .ul {
            padding: 10px 20px;
            background-color: #aaa;
            li{
                display: inline-block;
            }
            .logo ~ li{
                float: right;
            }
            .singOut{
                margin-left: 20px;
            }
        }
        img{
            height: 30px;
            width: 30px;
            margin-right: 5px;
        }
    }
</style>
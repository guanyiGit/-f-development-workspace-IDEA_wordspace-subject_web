import router from './index.js'

router.beforeEach((to, from, next) => {
    var userId=getCookie("userId")
    //if存在用户信息存在并且是去登陆页面，重定向到本页面
    if(to.name=="login"&&userId){
        router.replace({name: 'home'})
    }
    //if是登陆页放行
    if(to.name=="login"){
        next()
    }
    //if用户信息存在放行
    if(userId){
        next()
    }else {
        next({name: "login"})
    }
})
function getCookie(name)
{
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
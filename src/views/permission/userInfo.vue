<template>
    <div class="centoer">
        <p class="title">用户权限>详情</p>
        <div class="btns">
            <el-button type="primary" size="mini" @click="returnn">返回</el-button>
        </div>
        <div class="tablPerp">
            <div class="wai">
                <div class="nei">
                    <div class="ovh">
                        <div class="mgt10 ww50">
                            <span class="db w100 fl h40 lh40 cor0 pdl30">姓名:</span>
                            <div class="mgl100">
                                <input v-model="userInfo.name" type="text" class="ww100 h40 lh40 pdl20 borf1 ras4" style="width: 400px" disabled="disabled">
                            </div>
                        </div>
                    </div>

                    <div class="ovh">
                        <div class="mgt10 ww50">
                            <span class="db w100 fl h40 lh40 cor0 pdl30">联系方式:</span>
                            <div class="mgl100">
                                <input v-model="userInfo.phone" type="text" class="ww100 h40 lh40 pdl20 borf1 ras4" style="width: 400px" disabled="disabled">
                            </div>
                        </div>
                    </div>

                    <div class="ovh">
                        <div class="mgt10 ww60">
                            <span class="db w100 fl h40 lh40 cor0 pdl30">所属角色:</span>
                            <div class="mgl100">
                                <input   v-model="userInfo.roleName" type="text" class="ww100 h40 lh40 pdl20 borf1 ras4" style="width: 400px" disabled="disabled">
                            </div>
                        </div>
                    </div>
                    <div class="ovh">
                        <div class="mgt10 ww50">
                            <span class="db w100 fl h40 lh40 cor0 pdl30">登录名:</span>
                            <div class="mgl100">
                                <input   v-model="userInfo.username" type="text" class="ww100 h40 lh40 pdl20 borf1 ras4" style="width: 400px" disabled="disabled">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                userId:null,
                userInfo:null
            }
        },
        created(){
            this.userInfo=JSON.parse(sessionStorage.getItem("userII"));
        },
        methods:{
            returnn:function () {
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>

</style>
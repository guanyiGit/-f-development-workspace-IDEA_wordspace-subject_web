<template>
    <el-container>
        <el-header>
            <Top></Top>
        </el-header>
        <el-container class="main">
            <el-aside width="200px"><Menu></Menu></el-aside>
            <el-main class="rig_main">
                    <router-view></router-view>  
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

    import Top from '@/components/layout/Top'
    import Menu from '@/components/layout/Menu'

    export default {
        name: "Containner",
        components: {
            Top, Menu
        },
    }
</script>

<style scoped>
    .cont-main{
        margin: 0;
        padding: 0;
        width: 99.1vw;
        height: 100vh;
    }
    .contner {
        height: 94vh;
        margin-top: 4px;
    }
    .contner>*:first-child{
        width: 200px;
        float:left ;
        margin-right: 13px;
    }
    .contner>*:last-child{
        width: auto;
        border: solid 1px red;
    }
    .main{
        padding: 0 10px;
        /*height: 93vh;*/
        height: 100%;
        min-height: 500px;
    }


</style>
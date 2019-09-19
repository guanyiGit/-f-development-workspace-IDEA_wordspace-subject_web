<template>
    <!--抽题新增：分类选择题目个数的页面-->
    <div class="centoer">
        <p class="title">试卷库<img src="../../../public/img/separator.png"/>新增</p>
        <div class="btns">
            <el-button type="primary" size="mini" v-on:click="cancell">上一步</el-button>
            <el-button type="primary" size="mini" v-on:click="toTopc">下一步</el-button>
        </div>
        <div class="tablPerp">
            <div class="wai">
                <div class="nei">
                    <div class="ovh">
                        <div class="mgt10 ww80">
                            <div class="mgl31">
                                <p style="margin-top: 20px">
                                    <span>抽取试题：</span><span style="color: red">{{count}}题</span>
                                    <span style="margin-left: 20px;">试卷设置的试题个数：</span><span style="color: red">{{parmQuestion.paperNumber}}题</span>
                                </p>
                                <table class="mtable">
                                    <tr>
                                        <td>试题难度</td>
                                        <td>抽取个数</td>
                                        <td>总题数</td>
                                    </tr>
                                    <tr v-for="(item,index) in difficultyList" :key="index">
                                        <td>{{item.type==0?'简单':item.type==1?'一般':item.type==2?'困难':''}}</td>
                                        <td><input style="width: 70px;vertical-align:middle;" v-model="item.setNum" type="text" autocomplete="off" placeholder="个数" class="el-input__inner" v-on:change="changee(index)"></td>
                                        <td>{{item.num}}</td>
                                    </tr>
                                </table>
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
        name: "QuestionAdd",
        data() {
            return {
                difficultyList:[],//存放每种难度题型数量的集合
                count:0,
                parmQuestion:{
                    paperId:null,//试卷表主键
                    paperType:9,//试卷分类
                    paperMode:0,//组卷方式
                    paperName:null,//试卷名称
                    paperNumber:null,//题目个数
                    paperTotalScore:null,//题目总分
                    paperStatus:null,//试卷状态
                    paperCreater:null,//创建人主键
                    paperCreateTime:null,//创建时间
                    typeList:[],//存放不同类型的试题个数键值对
                    difficultyList:[],//存放不同难度的试题个数键值对
                    tSubjectRefPapers:[],//试卷试题关联表集合
                    difficulty:null,//查询条件：试题难度
                    type:null,//查询条件：试题类型
                    num:1,//
                    size:10,
                    input:null//查询条件
                },
            }
        },
        created() {
            this.parmQuestion=JSON.parse(sessionStorage.getItem("parmQuestion"));
            this.$axios({
                url: '/biz/testPaperLib/selectDifficultyOrTypeNum',
                method: 'get',
                params:{'type':this.parmQuestion.paperType}
            }).then((res) => {
                if (res.code == 200) {
                    if (res.obj != null) {
                        this.difficultyList = res.obj.difficulty
                        for (var i=0;i<this.difficultyList.length;i++) {
                            this.difficultyList[i].setNum=0;
                        }
                    }
                }else {
                    this.$alert("网络繁忙！")
                }
            }).catch((res) => {
                console.log(res)
            })
        },
        methods:{
            changee:function(index){
                this.count=0
                if(!(/^\d+$/.test(this.difficultyList[index].setNum))){
                    this.difficultyList[index].setNum=0
                    this.$alert("请填写正整数！");
                }else {
                    if (parseInt(this.difficultyList[index].setNum)>parseInt(this.difficultyList[index].num)) {
                        this.difficultyList[index].setNum=this.difficultyList[index].num
                    }
                }
                for (var i=0;i<this.difficultyList.length;i++) {
                    this.count += parseInt(this.difficultyList[i].setNum)
                }
            },
            toTopc:function () {
                this.count=0
                this.parmQuestion.difficultyList=this.difficultyList;
                for (var i=0;i<this.parmQuestion.difficultyList.length;i++) {
                    this.count += parseInt(this.parmQuestion.difficultyList[i].setNum)
                }
                if (this.count!=this.parmQuestion.paperNumber){
                    this.$alert("抽取试题个数与设置的试题个数不相等，请调整抽取试题个数！")
                    return
                }
                this.$axios({
                    url: '/biz/testPaperLib/selectTSubjectRefPapers',
                    method: 'post',
                    headers:{
                        'Content-Type': 'application/json;charset=UTF-8'
                    },
                    data: JSON.stringify(this.parmQuestion),
                    // isloading: true,
                }).then((res) => {
                    if (res.code == 200) {
                        if (res.obj != null) {
                            this.parmQuestion.tSubjectRefPapers = res.obj;
                            // this.$router.push({name:"TopicSelection",params:{'parmQuestion':JSON.stringify(this.parmQuestion)}});
                            sessionStorage.setItem("parmQuestion",JSON.stringify(this.parmQuestion))
                            this.$router.push({name:"SetUpScore"});
                        }
                    }else {
                        this.$alert("网络繁忙,请稍后再试！")
                    }
                }).catch((res) => {
                    console.log(res)
                })
            },
            cancell:function () {
                this.$router.go(-1);
            }
        }
    }

</script>

<style scoped>
    .wai{
        border-top: solid 1px #ddd
    }
    .nei{
        margin:auto;
        margin-top: 70px;
        width:500px;
        height:150px;
    }
    span{
        font-size: 16px;
    }
    input{
        margin-left: 0px;
        width: 380px;
    }
</style>
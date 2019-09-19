<template>
    <!--试卷详情-->
    <div class="centoer">
        <p class="title">试卷库<img src="../../../public/img/separator.png"/>详情</p>
        <div class="btns">
            <el-button type="primary" size="mini" v-on:click="preStep">返回</el-button>
        </div>
        <div class="selecteds">
            <el-select v-model="params.paperMode" popper-class="el-select" placeholder="试题分类" v-on:change="change">
                <el-option v-for="(item,index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <el-select v-model="params.difficulty" popper-class="el-select" placeholder="难度" v-on:change="change">
                <el-option v-for="(item,index) in options1" :key="index" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <span style="margin-left: 20px;">题目个数： </span>
            <span style="color: red">{{paperNumber}}个</span>
            <span style="margin-left: 20px">试卷总分：</span>
            <span style="color: red">{{paperTotalScore}}分</span>
            <el-input class="saerch_input fr" placeholder="搜索试题内容" v-model.trim="params.input" @keyup.enter.native="searchHandle">
                <i class="el-icon-search" slot="suffix" @click="searchHandle"> </i>
            </el-input>
        </div>
        <div class="tablPerp">
            <table class="mtable">
                <tr>
                    <td>试题分类</td>
                    <td>试题名称</td>
                    <td>难度</td>
                    <td>分值</td>
                </tr>
                <tr v-for="(item,index) in tableData" :key="index">
                    <td style="width: 100px">{{item.subjectMode==0?'问卷调查':item.subjectMode==1?'在线考试':item.subjectMode==2?'知识竞赛':''}}</td>
                    <td><div>{{item.subjectContent}}</div></td>
                    <td style="width: 60px">{{item.subjectDifficulty==0?'简单':item.subjectDifficulty==1?'一般':item.subjectDifficulty==2?'困难':''}}</td>
                    <td style="width: 60px">{{item.score}}分</td>
                </tr>
            </table>
        </div>
        <div>
            <pageVue :pageData="page" @chekdpageCallcak="changedPage"></pageVue>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TestPaperInfo",
        data() {
            return {
                paperNumber:0,//题目个数
                paperTotalScore:0,//试卷总分
                options: [{
                    value: 9,
                    label: '全部'
                },{
                    value: 0,
                    label: '问卷调查'
                }, {
                    value: 1,
                    label: '在线考试'
                }, {
                    value: 2,
                    label: '知识竞赛'
                }],
                options1: [{
                    value: 9,
                    label: '全部'
                },{
                    value: 0,
                    label: '简单'
                }, {
                    value: 1,
                    label: '一般'
                },{
                    value: 2,
                    label: '困难'
                }],
                tableData: [],
                totalPage:0,
                params:{
                    paperId:null,
                    paperMode:null,
                    difficulty:null,
                    input:null,
                    num:1,
                    size:10
                },
            }
        },
        created(){
            this.params.paperId=this.$route.params.paperId;
            this.paperNumber=this.$route.params.paperNumber;
            this.paperTotalScore=this.$route.params.paperTotalScore;
            initData(this);
        },
        computed:{
            page() {
                return {
                    curPage: this.params.num,//当前页吗
                    totalCount: this.totalPage,//总条数
                    pageSize: this.params.size,//页面大小
                }
            }
        },
        methods:{
            searchHandle() {
                this.params.num = 1;
                initData(this);
            },
            changedPage(index) {
                this.params.num = index;
                initData(this);
            },
            change:function () {
                this.params.num=1
                initData(this);
            },
            preStep:function () {//返回
                // this.$router.push("TestPaperList");
                this.$router.go(-1)
            },
        }
    }

    function initData(_this) {
        if (_this.params.paperMode == 9 || _this.params.paperMode == "9") {
            _this.params.paperMode=null;
        }
        if (_this.params.difficulty == 9 || _this.params.difficulty == "9") {
            _this.params.difficulty=null;
        }
        _this.$axios({
            url: '/biz/testPaperLib/selectTestPaperInfo',
            method: 'get',
            params: _this.params
        }).then((res) => {
            if (res.code == 200) {
                if (res.obj == null) {
                    _this.tableData = []
                    _this.totalPage = 0
                } else {
                    _this.tableData = res.obj.list
                    _this.totalPage = res.obj.total
                }
            }
        }).catch((res) => {
            console.log(res)
        })
    }
</script>

<style scoped>
tr div{
    max-height: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
}
</style>
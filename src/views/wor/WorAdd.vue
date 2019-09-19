<template>
    <div class="centoer">
        <p class="title">
            <font class="primary cp td-u" @click="$router.go(-1);">试题库</font> &gt;
            <font>新增</font>
        </p>
        <div class="btns">
            <el-button type="primary" size="mini" @click="saveHandle('back')">保存并返回</el-button>
            <el-button type="primary" size="mini" @click="saveHandle('go')">保存并继续添加</el-button>
            <el-button size="mini" @click="$router.go(-1)">返回</el-button>
        </div>
        <div class="selecteds">
            题型：&nbsp;
            <el-select class="mgr20" clearable v-model="params.sunjectType" placeholder="请选择">
                <el-option v-for="item in sunjectTypeList" :key="item.seq" :label="item.desc"
                           :value="item.seq"></el-option>
            </el-select>
            试题分类：&nbsp;
            <el-select class="mgr20" clearable v-model="params.subjectMode" placeholder="请选择">
                <el-option v-for="item in subjectModeList" :key="item.seq" :label="item.desc"
                           :value="item.seq"></el-option>
            </el-select>
            试题难度：&nbsp;
            <el-select class="mgr20" clearable v-model="params.subjectDifficulty" placeholder="请选择">
                <el-option v-for="item in subjectDifficultyList" :key="item.seq" :label="item.desc"
                           :value="item.seq"></el-option>
            </el-select>
        </div>

        <div class="bord-cm mgb30 pdt2 ">
            <p class="dfl aic bgf6 h40 ct mgb2">
                <span class="dinb h35 lh35 bgc w90 t-c mgr20">试题名称</span>
                <span>
                    <font color="#c1c1c1">这里填写题目描述</font>
                </span>
            </p>
            <div>
                <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="params.subjectContent">
                </el-input>
            </div>
        </div>


        <div class="bord-cm mgb30 pdt2 ">
            <p class="dfl aic bgf6 h40 ct mgb2">
                <span class="dinb h35 lh35 bgc w90 t-c mgr20">试题图片</span>
                <span>
                    <font color="#c1c1c1">请上传一张清晰的图片作为试题</font>
                </span>
            </p>
            <div>
                <img-upload :limit="1" ref="upload"></img-upload>
            </div>
        </div>

        <div class="bord-cm mgb30 pdt2 ">
            <p class="dfl aic bgf6 h40 ct mgb2">
                <span class="dinb h35 lh35 bgc w90 t-c mgr20">选项</span>
                <span v-if="params.sunjectType != 3">
                    <font color="#c1c1c1">请填写选项内容并选择正确答案</font>
                </span>
            </p>
            <div>
                <ul class="ul-ad" v-if="params.sunjectType != 3">
                    <li class="dfl aic pdl10" v-for="(item,index) in params.tSubjectOptions" :key="index">
                        <span>
                            <el-radio v-if="params.sunjectType == 0 || params.sunjectType == 2" class="ras100" v-model="checkOptionIndex"
                                      :label="index"></el-radio>
                            <el-checkbox v-if="params.sunjectType == 1" class="ras100"
                                         v-model="item.isTrue"></el-checkbox>
                        </span>
                        <span class="ww80 mgr20 mgl20">
                            <el-input v-model="item.optionValue" placeholder="请输入内容"></el-input>
                        </span>
                        <span class="fs16 mgr10">
                            <font class="el-icon-close cp horcc" color="red" @click="removeOptHandle(index)"></font>
                        </span>
                        <span class="fs16">
                            <font color="green" class="el-icon-plus cp horcc" @click="addOptHandle(index)"></font>
                        </span>
                    </li>
                </ul>
                <div v-if="params.sunjectType == 3" class="ww98 h120 mgl10 mgt10 mgb10">
                    <el-input type="textarea" class="h100" :disabled="true"></el-input>
                </div>

            </div>
        </div>

        <div class="bord-cm mgb30 pdt2 ">
            <p class="dfl aic bgf6 h40 ct mgb2">
                <span class="dinb h35 lh35 bgc w90 t-c mgr20">解析</span>
                <span>
                    <font color="#c1c1c1">若无解析本项可不填</font>
                </span>
            </p>
            <div>
                <el-input type="textarea" :rows="6" placeholder="请输入内容" v-model="params.subjectAnalysis">
                </el-input>
            </div>
        </div>

    </div>
</template>

<script>
    import {subjectDifficultyList, subjectModeList, sunjectTypeList} from '@/utils/dict'
    import ImgUpload from '@/components/imgUpload'

    export default {
        name: "WorAdd",
        data() {
            return {
                checkOptionIndex: '',
                params: {
                    sunjectType: 0,//题目类型 默认单选 opts
                    subjectMode: 1,//题目分类 默认在线考试 opts
                    subjectDifficulty: 0,//题目难度  默认全部 opts
                    subjectContent: '',//题目内容
                    subjectAnalysis: '',//题目解析
                    tSubjectOptions: [
                        {
                            optionValue: '',//选项值
                            isTrue: false,//是否是正确选项
                        },
                        {
                            optionValue: '',//选项值
                            isTrue: false,//是否是正确选项
                        },
                        {
                            optionValue: '',//选项值
                            isTrue: false,//是否是正确选项
                        },
                        {
                            optionValue: '',//选项值
                            isTrue: false,//是否是正确选项
                        }
                    ]
                },
                sunjectTypeList: sunjectTypeList.filter(x => x.seq >= 0),
                subjectModeList: subjectModeList.filter(x => x.seq >= 0),
                subjectDifficultyList: subjectDifficultyList.filter(x => x.seq >= 0),
                // subjectDifficultyList: subjectDifficultyList.filter(x => x.seq !== ''),
            }
        },
        components: {ImgUpload},

        computed: {},

        watch: {
            checkOptionIndex(newValue, oldValue) {
                console.log(newValue);
                this.params.tSubjectOptions.forEach((x, index) => {
                    x.isTrue = false
                    if (newValue == index) {
                        x.isTrue = true
                    }
                })
            },

            'params.sunjectType'(newValue, oldValue){
                if (newValue == 2){
                    //如果是判断题
                    this.params.tSubjectOptions = [
                        {
                            optionValue: '正确',//选项值
                            isTrue: false,//是否是正确选项
                        },
                        {
                            optionValue: '错误',//选项值
                            isTrue: false,//是否是正确选项
                        }
                    ];
                }
            }
        },

        methods: {
            saveHandle(type = 'back') {
                save.apply(this, [type]);
            },
            removeOptHandle(index) {
                this.params.tSubjectOptions.splice(index, 1);
            },
            addOptHandle(index) {
                this.params.tSubjectOptions.splice(index + 1, 0, {
                    optionValue: '',//选项值
                    isTrue: false,//是否是正确选项
                });
            }
        }
    }

    async function save(type = 'back') {
        const params = {...this.params};
        params.subjectCreater = getCookie('userId');
        if ('' === params.sunjectType) {
            this.$alert("题型不能为空，请下拉选择！");
            return;
        }
        if ('' === params.subjectMode) {
            this.$alert("试题分类不能为空，请下拉选择！");
            return;
        }
        if ('' === params.subjectDifficulty) {
            delete params.subjectDifficulty;
        }
        if (!params.subjectContent && this.$refs.upload.fileList.length === 0) {
            this.$alert("试题名称或试题图片不能为空！");
            return;
        }
        if (!params.subjectAnalysis) {
            delete params.subjectAnalysis;
        }
        if (params.sunjectType != 3) {


            if (!params.tSubjectOptions || params.tSubjectOptions.length == 0) {
                this.$alert("题目不能没有选项(答案)！");
                return;
            }

            let ignores = [];//忽略的项
            params.tSubjectOptions = params.tSubjectOptions.map((item, index) => {
                if (!item.optionValue && item.optionValue.trim().length == 0) {
                    ignores.push(index);
                    return
                }
                const temp = {...item}
                temp.optionNumber = 1 + index;
                return temp;
            }).filter(x => x);

            if (ignores.length > 0) {
                let result = await this.$confirm(`${ignores.length}个选项为空值，点击“继续”将忽略空值的项？`, "空值选项提醒", {
                    showCancelButton: true,
                    showConfirmButton: true,
                    cancelButtonText: '取消',
                    confirmButtonText: '继续',
                }).then(Promise.resolve('confirm')).catch(Promise.resolve('err'));
                if ('confirm' != result) {
                    this.$message("已取消")
                    return;
                }
            }
            //

            if (params.tSubjectOptions.length == 0) {
                this.$alert("至少需要一个有效选项！");
                return;
            }

            if (params.tSubjectOptions.length == 0) {
                this.$alert("还没有一个有效的选项");
            }

            if (params.tSubjectOptions.every(x => !x.isTrue)) {
                if (this.params.subjectMode === 0) {
                } else {
                    this.$alert("请选择至少一项为正确的选项！");
                    return;
                }
            }
            params.tSubjectOptions.forEach(x => {
                x.isTrue = x.isTrue ? 0 : 1;
            })
        } else {
            delete params.tSubjectOptions
        }
        if (this.$refs.upload.fileList.length > 0) {
            let resultImg = await new Promise((resolve, reject) => {
                this.$refs.upload.upload(resolve, true)
            })
            if (resultImg.success) {
                params.subjectUrl = resultImg.obj[0].url
            } else {
                this.$message.error("图片上传失败");
                return;
            }
        }

        this.$axios.post("/biz/wor/orOpts", [params], {
            isloading: true,
            // headers:{
            //     'Content-Type': 'application/json'
            // }
        }).then(res => {
            if (res.success) {

                this.$alert("添加成功").then(res => {
                    if (type == 'go') {
                        this.$refs.upload.fileList = [];

                        this.params.subjectContent = '';//题目内容
                        this.params.subjectAnalysis = '';//题目解析
                        this.params.tSubjectOptions = [
                            {
                                optionValue: '',//选项值
                                isTrue: false,//是否是正确选项
                            },
                            {
                                optionValue: '',//选项值
                                isTrue: false,//是否是正确选项
                            },
                            {
                                optionValue: '',//选项值
                                isTrue: false,//是否是正确选项
                            },
                            {
                                optionValue: '',//选项值
                                isTrue: false,//是否是正确选项
                            }
                        ]
                    } else {
                        this.$router.back();
                    }
                })

            } else {
                this.$alert("添加失败," + res.msg)
            }
        })


    }

    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
</script>

<style scoped>
    .bord-cm {
        border: solid 1px #ddd;
    }

    .ul-ad {
        border: solid 1px #eee;
        padding-top: 20px;
        margin-bottom: 3px;
    }


    .ul-ad li {
        margin: 10px 0;
    }

    .selecteds {
        line-height: 30px;
    }

    .horcc:hover {
        background-color: orange;
    }
</style>
<style>
    .ct .el-input__inner {
        background-color: #f6f6f6;
    }

    .el-textarea .el-textarea__inner {
        height: 100px;
    }


</style>
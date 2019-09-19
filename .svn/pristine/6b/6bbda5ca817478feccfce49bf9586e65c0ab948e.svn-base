<template>
    <div class="page">
        <!-- <b-form-select style="float: left; width: 148px;" class="cp" v-model="selected">
            <option :value="item" v-for="(item,index) in options" key="index">{{item}}</option>
        </b-form-select> -->
        <div class="total-pg">
            <!-- <span>total：</span>
            <b-form-input :placeholder="pageData.totalCount"></b-form-input> -->
            <Input :value="pageData.totalCount" disabled>
                <span slot="prepend" class="t-c">
                    <font color="#379D8E">total</font>
                </span>
                <!-- <span slot="append">.com</span> -->
            </Input>
        </div>
        <b-pagination v-model="pageData.curPage" size="sm" align="right" limit="5" :total-rows="pageData.totalCount" @change="changedPage" :per-page="pageData.pageSize" class="mt-4">
            <span class="text-success" slot="first-text">First</span>
            <span class="text-danger" slot="prev-text">Prev</span>
            <span class="text-warning" slot="next-text">Next</span>
            <span class="text-info" slot="last-text">Last</span>
            
  <!--           <span class="text-success" slot="first-text">首页</span>
            <span class="text-danger" slot="prev-text">上一页</span>
            <span class="text-warning" slot="next-text">下一页</span>
            <span class="text-info" slot="last-text">尾页</span> -->
            <div slot="ellipsis-text">
                <b-spinner small type="grow"></b-spinner>
                <b-spinner small type="grow"></b-spinner>
                <b-spinner small type="grow"></b-spinner>
            </div>
            <span slot="page" slot-scope="{ page, active}">
                    <b v-if="active">{{ page }}</b>
                    <i v-else>{{ page }}</i>
            </span>
        </b-pagination>
    </div>
</template>

<script>
    export default {
        name: "Page",
        data() {
            return {
                options:[10,15,20],
                selected:10
            }
        },
        props: {
            pageData: {//分页数据
                type: Object,
                default: function () {
                    return {
                        curPage: 1,//当前页吗
                        totalCount: 1,//总条数
                        pageSize: 1,//页面大小
                    }
                }
            }
        },
        methods: {
            changedPage(index) {
                this.$emit('chekdpageCallcak', index)
            }
        }
    }
</script>

<style>
    .page {
        padding-right: 20px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }

    .page-item.active .page-link {
        background-color: #319D8E;
        border-color: #319D8E;
    }
    .page .form-control{
        width: 50px;
        height: 22px;
        color: #6c757d;
        display: inline-block;
        /*margin-left: 10px;*/
    }
    .total-pg{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 105px;
    }
    .page  .ivu-input-group>.ivu-input:last-child{
        text-align: center;
        color:#DA3148;
        background-color: #F8F8F9;
        cursor: auto;
    }
</style>
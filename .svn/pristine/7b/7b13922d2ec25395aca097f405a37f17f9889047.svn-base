<template>
	<div class="centoer">
		<p class="title">成绩查看</p>
		<div class="btns">
			<el-button type="primary" size="mini">保存并返回</el-button>
			<el-button type="primary" size="mini">保存并继续添加</el-button>
			<el-button size="mini" @click="$router.back();">返回</el-button>
		</div>
		<div class="selecteds">
			<div>
				<div class="h35 lh35 fl"> 考试分类：&nbsp;</div>
				<el-select class="mgr20" clearable value="value" placeholder="请选择">
					<el-option label="item.desc"  value="item.seq"></el-option>
				</el-select>
			</div>
		</div>


		<div class="tablPerp">
			<table class="mtable">
				<tr>
					<td class="dtc">
						<el-checkbox></el-checkbox>
					</td>
					<td>题型</td>
					<td>试题分类</td>
					<td>试题名称</td>
					<td>难度</td>
					<td>创建人</td>
					<td>创建时间</td>
					<td>状态</td>
					<td>操作</td>
				</tr>
				<tr>
					<td class="dtc">
						<el-checkbox></el-checkbox>
					</td>
					<td>题型111</td>
					<td>试题分11类</td>
					<td>试题11称</td>
					<td>难度11</td>
					<td>创建11人</td>
					<td>创建11人时间</td>
					<td>状态111</td>
					<td>
						<a href="javascript:;" style="color: #38C6B6">查看</a>
					</td>
				</tr>
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
		name: "template",
		data() {
			return {
				params:{
					pageNum: 1,
					limit: 10,
					keyWord: '',
					totalCount: 1,
				}
			}
		},
		methods:{
			changedPage(index) {
				this.params.pageNum = index;
			},
		},
		computed: {
			page() {
				return {
                    curPage: this.params.pageNum,//当前页吗
                    totalCount: this.params.totalCount,//总条数
                    pageSize: this.params.limit,//页面大小
                }
            }
        },
    }
</script>

<style scoped>

</style>

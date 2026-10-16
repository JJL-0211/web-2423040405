<template>
  <div>
    <el-row style="margin-bottom:10px">
      <el-col>
        <span style="margin-right:10px">题目</span>
        <el-input placeholder="题目关键词" v-model="searchForm.keyword" style="width:180px;display:inline-block;margin-right:10px"></el-input>
        <el-button type="primary" @click="queryQuestion">查询题目</el-button>
        <el-button type="success" @click="openAddDialog">添加题目</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData">
      <el-table-column label="序号" prop="id"></el-table-column>
      <el-table-column label="问题" prop="question"></el-table-column>
      <el-table-column label="选项" prop="opts"></el-table-column>
      <el-table-column label="答案" prop="answer"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="openEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handlePageChange"
      :current-page="pageInfo.page"
      :page-size="pageInfo.pageSize"
      layout="prev, pager, next, jumper"
      :total="pageInfo.total"
      style="margin-top:10px"
    >
    </el-pagination>

    <!--题目弹窗-->
    <el-dialog v-model="dialogVisible" title="题目" width="600px">
      <el-form>
        <el-form-item label="问题内容">
          <el-input v-model="form.question"></el-input>
        </el-form-item>
        <el-form-item label="选项A">
          <el-input v-model="form.optA"></el-input>
        </el-form-item>
        <el-form-item label="选项B">
          <el-input v-model="form.optB"></el-input>
        </el-form-item>
        <el-form-item label="选项C">
          <el-input v-model="form.optC"></el-input>
        </el-form-item>
        <el-form-item label="选项D">
          <el-input v-model="form.optD"></el-input>
        </el-form-item>
        <el-form-item label="答案">
          <el-input v-model="form.answer"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="submitForm">确定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "QuestionView",
  data(){
    return{
      searchForm:{keyword:''},
      tableData:[
        {id:1,question:"法国的首都是什么？",opts:"巴黎,巴黎,巴黎,巴黎",answer:"巴黎"},
        {id:1,question:"法国的首都是什么？",opts:"巴黎,巴黎,巴黎,巴黎",answer:"巴黎"},
        {id:1,question:"法国的首都是什么？",opts:"巴黎,巴黎,巴黎,巴黎",answer:"巴黎"},
        {id:1,question:"法国的首都是什么？",opts:"巴黎,巴黎,巴黎,巴黎",answer:"巴黎"},
        {id:1,question:"法国的首都是什么？",opts:"巴黎,巴黎,巴黎,巴黎",answer:"巴黎"},
      ],
      dialogVisible:false,
      form:{question:'',optA:'',optB:'',optC:'',optD:'',answer:''},
      pageInfo:{
        page:1,
        pageSize:10,
        total:1000
      }
    }
  },
  methods:{
    queryQuestion(){
      this.$message.success("查询题目");
    },
    openAddDialog(){
      this.dialogVisible=true;
      this.form={question:'',optA:'',optB:'',optC:'',optD:'',answer:''}
    },
    openEdit(row){
      this.dialogVisible=true;
      this.form = {...row}
    },
    submitForm(){
      this.$message.success("保存题目成功");
      this.dialogVisible=false;
    },
    del(index){
      this.tableData.splice(index,1);
      this.$message.success("删除成功")
    },
    handlePageChange(page){
      this.pageInfo.page = page;
    }
  }
}
</script>
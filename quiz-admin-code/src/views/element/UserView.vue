<template>
  <div>
    <!--搜索区域-->
    <el-row style="margin-bottom:10px">
      <el-col>
        <span style="margin-right:10px">用户名</span>
        <el-input placeholder="用户名" v-model="searchForm.username" style="width:180px;display:inline-block;margin-right:10px"></el-input>
        <el-button type="primary" @click="queryUser">查询用户</el-button>
        <el-button type="success" @click="openAddDialog">添加用户</el-button>
      </el-col>
    </el-row>
    <!--表格-->
    <el-table :data="tableData">
      <el-table-column label="日期">
        <template #default="scope">
          <el-icon><Timer /></el-icon>
          <span style="margin-left:10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户名">
        <template #default="scope">
          <el-tag>{{ scope.row.username }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="密码" prop="pwd"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="small" @click="openEdit(scope.row)">编辑</el-button>
          <el-button size="small" type="danger" @click="del(scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--分页-->
    <el-pagination
      @current-change="handlePageChange"
      :current-page="pageInfo.page"
      :page-size="pageInfo.pageSize"
      layout="prev, pager, next, jumper"
      :total="pageInfo.total"
      style="margin-top:10px"
    >
    </el-pagination>

    <!--添加/编辑弹窗-->
    <el-dialog v-model="dialogVisible" title="新用户" width="500px">
      <el-form>
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="初始密码">
          <el-input v-model="form.pwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.pwd2"></el-input>
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
import { Timer } from '@element-plus/icons-vue'

export default {
  name: "UserView",
  components: { Timer },
  data(){
    return{
      searchForm:{username:''},
      tableData:[
        {date:'2016-05-02',username:'王小虎',pwd:'123456'},
        {date:'2016-05-04',username:'王小虎',pwd:'123456'},
        {date:'2016-05-01',username:'王小虎',pwd:'123456'},
        {date:'2016-05-03',username:'王小虎',pwd:'123456'}
      ],
      dialogVisible:false,
      form:{username:'',pwd:'',pwd2:''},
      pageInfo:{
        page:1,
        pageSize:10,
        total:1000
      }
    }
  },
  methods:{
    queryUser(){
      this.$message.success("执行查询");
    },
    openAddDialog(){
      this.dialogVisible=true;
      this.form={username:'',pwd:'',pwd2:''}
    },
    openEdit(row){
      this.dialogVisible=true;
      this.form = {...row}
    },
    submitForm(){
      this.$message.success("保存成功");
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
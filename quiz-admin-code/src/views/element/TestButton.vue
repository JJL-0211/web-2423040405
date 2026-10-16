<template>
  <div>
    <h1>hello vue</h1>
    <el-button round>圆角按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
    <el-input-number v-model="num" :min="1"></el-input-number>
  </div>
</template>
<script>
export default {
  data(){
    return {
      num:1
    }
  }
}
</script>
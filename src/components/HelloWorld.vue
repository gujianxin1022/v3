<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="test-style">
    <p>测试scss</p>
  </div>
  <el-button type="primary">主要按钮</el-button>
</template>

<style scoped lang="scss">
.test-style {
  p{
    color:red
  }
}
</style>

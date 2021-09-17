<script setup>
import { ref } from 'vue'
import login from '@/pages/login.vue'
import home from '@/pages/home.vue'

defineProps({
  msg: String
})

</script>

<template>
  <h1>{{ msg }}</h1>
  <login />
  <home />
  <div class="test-style">
    <p>测试scss</p>
  </div>
  <el-button type="primary">主要按钮</el-button>
</template>

<style scoped lang="scss">
.test-style {
  p {
    color: red;
  }
}
</style>

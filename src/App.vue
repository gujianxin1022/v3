<script>
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
export default {
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  
  data() {
    return {
      locale: zhCn
    }
  }
}

</script>

<template>
  <el-config-provider :locale="locale">
    <ul>
      <li>
        <router-link to="/login">login</router-link>
      </li>
      <li>
        <router-link to="/home">home</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </el-config-provider>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

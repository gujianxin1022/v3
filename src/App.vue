<script>
import { ElConfigProvider } from 'element-plus'
import i18n from '@/assets/locales';

export default {
  components: {
    [ElConfigProvider.name]: ElConfigProvider
  },
  
  data() {
    return {
      locale: i18n,      
    }
  }
}

</script>

<template>
  <el-config-provider :locale="locale.global.messages[locale.global.locale]">
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

<template>
    <h1>home page</h1>
    <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
    <div>{{ $t('登录') }}</div>
    <el-button @click="setLang('zh-cn')">中文</el-button>
    <el-button @click="setLang('en')">英文</el-button>
</template>

<script>
import i18n from '@/assets/locales';

export default {
    data() {
        return {
            value1: ''
        }
    },
    methods: {
        setLang(lang) {
            localStorage.setItem('lang', lang)
            this.$i18n.locale = lang
        }
    }

}
</script>

<style>
</style>
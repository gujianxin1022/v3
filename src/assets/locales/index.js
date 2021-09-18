import { createI18n } from 'vue-i18n';
import elementlangEn from 'element-plus/lib/locale/lang/en';
import elementlangZhCn from 'element-plus/lib/locale/lang/zh-cn';
import localeLangEn from './en.json';
import localeLangZhCn from './zh.json';

const messages = {
    en: {
        ...localeLangEn,
        ...elementlangEn,
    },
    'zh-cn': {
        ...localeLangZhCn,
        ...elementlangZhCn,
    },
};

const i18n = createI18n({
    locale: localStorage.getItem('lang') || 'zh-cn',
    messages,
});

export default i18n;
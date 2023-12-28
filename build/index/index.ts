import { createSSRApp } from 'vue'

import App from '../../app/views/index.vue'

createSSRApp(App, { ssrData: {
  count: 9863763,
  title: 'ThinkTS',
  subtitle: '欢迎使用ThinkTS框架'
} }).mount('#app')
import { createApp } from 'vue'

import App from '../../app/views/index.vue'

createApp(App, { ssrData: {
  count: 9863763,
  title: 'ThinkTS',
  subtitle: '欢迎使用ThinkTS框架'
} }).mount('#app')
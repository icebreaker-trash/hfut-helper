import { createSSRApp } from 'vue'
import App from './App.vue'
import '@/assets/scss/style.scss'

export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}

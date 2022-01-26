import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.filter('formatCount', function(value) {
	if (value >= 1000 && value <= 100000000) {
		value /= 1000;
		return value.toFixed(1) + '万'
	} else if (value >= 100000000) {
		value /= 100000000;
		return value.toFixed(1) + '亿'
	} else {
		return value
	}
})

Vue.filter('formatTime', function(value) {
	var data = new Date(value);
	return data.getFullYear() + '年' + (data.getMonth() + 1) + '月' + data.getDay() + '日'
})

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
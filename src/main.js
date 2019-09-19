import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  './router/filter.js'
import store from './store'
import './registerServiceWorker'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'

import iView from 'iview';
import 'iview/dist/styles/iview.css'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'


import './conf'

import Page from '@/components/Page'

import processDate from './utils/getNowFormatDate.js'

Vue.use(ElementUI)
Vue.use(iView)
Vue.use(BootstrapVue)
Vue.use(Viewer)
Vue.use(processDate)
Viewer.setDefaults({
    Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

Vue.component("pageVue", Page)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
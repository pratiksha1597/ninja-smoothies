import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import AddSmoothies from '@/components/AddSmoothies'
import EditSmoothies from '@/components/EditSmoothies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/add-smoothies',
      name: 'AddSmoothies',
      component: AddSmoothies
    },
    {
      path: '/edit-smoothies/:id',
      name: 'EditSmoothies',
      component: EditSmoothies
    }

  ]
})

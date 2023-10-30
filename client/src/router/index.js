import Vue from 'vue'
import Router from 'vue-router'

//User
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

// Authen
import Login from '@/components/Login'

// Comments
import CommentIndex from '@/components/Comments/Index'

// Car
import CarIndex from '@/components/Car/Index'
import CarCreate from '@/components/Car/CreateCar'
import CarEdit from '@/components/Car/EditCar'
import CarShow from '@/components/Car/ShowCar'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // car
    {
      path: '/cars',
      name: 'cars',
      component: CarIndex
    },
    {
      path: '/car/create',
      name: 'car-edit',
      component: CarCreate
    },
    {
      path: '/car/edit/:carId',
      name: 'car-edit',
      component: CarEdit
    },
    {
      path: '/car/:carId',
      name: 'car',
      component: CarShow
    },
    // comments
    {
      path: '/comments',
      name: 'comments',
      component: CommentIndex
    },

  ]
})



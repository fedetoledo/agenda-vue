import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import Dashboard from '@/components/Dashboard'
import firebase from 'firebase'
import store from '../store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard,
            meta: {
                requiresAuth: true
            }
        }
    ]
})

//Reglas de autorizacion
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    // const currentUser = firebase.auth().currentUser
    if(requiresAuth) {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                next('/login')
            } else {
                store.dispatch("fetchUser", user)
                next()
            }
        })
    } else {
        next()
    }
})

export default router
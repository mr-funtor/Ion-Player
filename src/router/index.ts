import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import TabsPageVue from '@/views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/home'
  },
  {
    path:'/tabs/',
    name:'Tabs',
    component:TabsPageVue,
    children:[
      {
        path:'/',
        redirect:'/tabs/home'
      },
      {
        path:'home',
        component:HomePage
      },
      {
        path:'search',
        component:()=> import('@/views/SearchTabPage.vue')
      },
      {
        path:'library',
        component:()=>import('@/views/LibraryTab.vue'),
        children:[
          {
            path:'',
            redirect:'/tabs/library/artist'
          },
          {
            path:'artist',
            component:()=>import('@/views/ArtistsPage.vue')
          },
          {
            path:'albums',
            component:()=>import('@/views/AlbumsPage.vue')
          },
          {
            path:'songs',
            component:()=>import('@/views/SongsPage.vue')
          },
        ]
      }
    ]
  },
  {
    path:'singleArtist/:id',
    component:()=>import('@/views/SingleArtistPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

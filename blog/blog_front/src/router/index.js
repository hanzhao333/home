import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Edit from '@/components/Edit'
import Find from '@/components/Find'
import Attention from '@/components/Attention'
import Message from '@/components/Message'
import Setting from '@/components/Setting'
import PersonPage from '@/components/PersonPage'
import Article_dyn from '@/components/Article_dyn'
import LoveArticle from '@/components/LoveArticle'
import CollectArticle from '@/components/CollectArticle'
import LoginRegister from '@/components/LoginRegister'
import Followers from '@/components/Followers'
import Followeing from '@/components/Followeing'
import ArticleDetail from '@/components/ArticleDetail'


Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/Find',
      children: [
        {
          path: '/ArticleDetail',
          name: 'ArticleDetail',
          component: ArticleDetail,
        },
        {
          path: '/Find',
          name: 'Find',
          component: Find,
        },
        {
          path: '/Attention',
          name: 'Attention',
          component: Attention,
        },
        {
          path: '/Message',
          name: 'Message',
          component: Message,
        },
        {
          path: '/Setting',
          name: 'Setting',
          component: Setting,
        },
        {
          path: '/PersonPage',
          name: 'PersonPage',
          component: PersonPage,
          redirect: '/Article_dyn',
          children: [
            {
              path: '/Article_dyn',
              name: 'Article_dyn',
              component: Article_dyn
            },
            {
              path: '/LoveArticle',
              name: 'LoveArticle',
              component: LoveArticle
            },
            {
              path: '/Followers',
              name: 'Followers',
              component: Followers
            },
            {
              path: '/Followeing',
              name: 'Followeing',
              component: Followeing
            },
          ]
        }
      ]
    },
    {
      path: '/Edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/CollectArticle',
      name: 'CollectArticle',
      component: CollectArticle
    },
    {
      path: '/LoginRegister',
      name: 'LoginRegister',
      component: LoginRegister
    }
  ]
})

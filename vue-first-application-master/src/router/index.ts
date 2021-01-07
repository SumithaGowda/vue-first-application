import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PostList from '../posts/post-list.vue'
import CommentList from '../comments/comment-list.vue'
import Post from '../posts/post.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/comment-list/:postId',
    name: 'comment-list',
    component: CommentList
  },
  {
    path: '/',
    name: 'post-list',
    component: PostList
  },
  {
    path: '/',
    name: 'post',
    component: Post
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

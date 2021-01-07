import { Post } from './../posts/post'
import http from '../http-common'

class Service {
  getPosts () {
    return http.get('/posts')
  }

  getComments (postId: string) {
    return http.get(`posts/${postId}/comments`)
  }

  addPost (post: Post) {
    return http.post('posts', post)
  }
}
export default new Service()

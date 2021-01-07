<template>
  <div style="padding:5px">
    <button @click="addNewPost()" class="btn btn-success">Add new Post</button>
  </div>
  <table border="1px solid red" v-if='posts.length > 0'>
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>body</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in posts" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.title}}</td>
        <td>{{item.body}}</td>
        <td>
          <button class="btn btn-primary" @click="loadComments(item.id)">Load Comments</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'
import Service from '../services/service'
export default class PostList extends Vue {
  posts = [];
  mounted () {
    Service.getPosts().then((respose) => {
      this.posts = respose.data
    })
  }

  loadComments (postId: string) {
    this.$router.push({ name: 'comment-list', params: { postId: postId } })
  }

  addNewPost () {
    this.$router.push({ name: 'post' })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
@import'~bootstrap/dist/css/bootstrap.css'
</style>

<template>
<h4>Comments for the Post</h4>
<table border="1px solid red" v-if='comments.length > 0'>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Comment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in comments" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.email}}</td>
        <td>{{item.body}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'
import Service from '../services/service'
export default class CommentList extends Vue {
  postId = ''
  comments = []
  mounted () {
    this.postId = this.$route.params.postId.toString()
    Service.getComments(this.postId).then((response) => {
      this.comments = response.data
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

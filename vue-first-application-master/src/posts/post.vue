<template>
<div style="margin-left:250px;margin-top:50px;width:500px">
        <h2>Add Post</h2>
        <form @submit.prevent="onSubmit()">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" v-model="post.title"  name="title" class="form-control" :class="{ 'is-invalid': !titleIsValid }" />
            </div>
            <div class="form-group">
                <label for="title">Body</label>
                <input type="text" v-model="post.body"  name="body" class="form-control" :class="{ 'is-invalid': !bodyIsValid }" />
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Register</button>
            </div>
        </form>
</div>
</template>

<script lang='ts'>
import { Vue } from 'vue-class-component'
import Service from '../services/service'
import { Post } from '../posts/post'
export default class PostList extends Vue {
  errors: string [] =[]
  post: Post = {}
  formIsValid = false
  titleIsValid = false
  bodyIsValid = false
  onSubmit () {
    console.log(this.post)
    if (this.post.title) {
      this.titleIsValid = true
    } else {
      this.titleIsValid = false
    }

    if (this.post.body) {
      this.bodyIsValid = true
    } else {
      this.bodyIsValid = false
    }

    if (this.post.title && this.post.body) {
      this.formIsValid = true
      this.titleIsValid = true
      this.bodyIsValid = true
      this.post.userId = '1'
      Service.addPost(this.post).then((respose) => {
        if (respose.status === 201) {
          alert('Successfully added')
          console.log(respose)
          this.$router.push({ name: 'post-list' })
        }
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
@import'~bootstrap/dist/css/bootstrap.css'
</style>

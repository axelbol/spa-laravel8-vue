<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Comment</td>
        <td>Date</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comment in comments">
        <td>{{ comment.id }}</td>
        <td>{{ comment.title }}</td>
        <td>{{ comment.comment_text.substring(0, 30) }}</td>
        <td>{{ comment.created_at }}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
export default{
  data(){
    return{
      comments: []
    }
  },
  mounted(){
    axios.get('/api/comments').then(response => {
      this.comments = response.data.data;
    });
  }
}
</script>
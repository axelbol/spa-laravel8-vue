<template>
<div>
  <table class="table">
    <thead>
      <tr>
        <td>ID</td>
        <td>Title</td>
        <td>Comment</td>
        <td>Date</td>
        <td>Actions</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="comment in comments.data" :key="comment.id">
        <td>{{ comment.id }}</td>
        <td>{{ comment.title }}</td>
        <td>{{ comment.comment_text.substring(0, 30) }}</td>
        <td>{{ comment.created_at }}</td>
        <td>
          <router-link :to="{ name: 'comments.edit', params:{ id:comment.id } }">Edit</router-link>
        </td>
      </tr>
    </tbody>
  </table>

  <pagination :data="comments" @pagination-change-page="getResults"></pagination>
</div>
</template>

<script>
export default{
  data(){
    return{
      comments: {}
    }
  },
  mounted(){
    this.getResults();
    // before pagination
    // axios.get('/api/comments').then(response => {
    //   this.comments = response.data.data;
    // });
  },
  methods: {
		// Our method to GET results from a Laravel endpoint
		getResults(page = 1) {
			axios.get('/api/comments?page=' + page)
				.then(response => {
					this.comments = response.data;
				});
		}
	}
}
</script>
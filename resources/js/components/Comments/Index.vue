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
          <router-link class="btn btn-info btn-sm" :to="{ name: 'comments.edit', params:{ id:comment.id } }">Edit</router-link>
          <button @click="delete_comment(comment.id)" class="btn btn-danger btn-sm">Delete</button>
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
		},

    delete_comment(comment_id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You won´t be able to revert this',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it'
      }).then((result) => {
        if(result.value){
          axios.delete('/api/comments/' + comment_id)
            .then(response => {
              this.$swal({icon: 'error', title: 'Deleted successfully'});
              this.getResults();
            }).catch(error => {
              this.$swal({icon: 'error', title: 'Error happened'});
            });
        }
      })
    }
	}
}
</script>
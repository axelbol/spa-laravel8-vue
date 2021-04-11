<template>
  <div>
    <form @submit.prevent="submit_form">
      Title:
      <br>
      <input type="text" v-model="fields.title" class="form-control">
      <div class="alert alert-danger" v-if="errors && errors.title">
        {{ errors.title[0] }}
      </div>
      <br>
      Comment Text:
      <textarea cols="30" rows="10" v-model="fields.comment_text" class="form-control"></textarea>
      <div class="alert alert-danger" v-if="errors && errors.comment_text">
        {{ errors.comment_text[0] }}
      </div>
      <br>
      Thumbnail:
      <br>
      <input type="file" @change="select_file">
      <br><br>
      <input type="submit" class="btn btn-primary" :disabled="form_submitting"
      :value="form_submitting ? 'Saving comment...' : 'Save comment'">
    </form>
  </div>
</template>

<script>
export default{
  data() {
    return {
      fields: {
        title: '',
        comment_text: '',
        thumbnail: null
      },
      errors: {},
      form_submitting: false
    }
  },

  methods: {
    select_file(event){
      this.fields.thumbnail = event.target.files[0];
    },
    submit_form() {
      this.form_submitting = true;
      //pass thumbnail
      let fields = new FormData();
      for (let key in this.fields){
        fields.append(key, this.fields[key]);
      }
      // axios.post('/api/comments', this.fields)
      axios.post('/api/comments', fields)
        .then(response => {
          this.$router.push('/');
          this.form_submitting = false;
        }).catch(error => {
          if(error.response.status === 422) {
            this.errors = error.response.data.errors;
          this.form_submitting = false;
          }
        });
    }
  }
}
</script>
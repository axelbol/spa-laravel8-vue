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
      <input type="submit" value="Save" class="btn btn-primary">
    </form>
  </div>
</template>

<script>
export default{
  data() {
    return {
      fields: {
        'title': '',
        'comment_text': '',
      },
      errors: {}
    }
  },

  methods: {
    submit_form() {
      axios.post('/api/comments', this.fields)
        .then(response => {
          this.$router.push('/')
        }).catch(error => {
          if(error.response.status === 422) {
            this.errors = error.response.data.errors;
          }
        });
    }
  }
}
</script>
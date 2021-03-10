<template>
  <div>
    <form @submit.prevent="submit_form">
      Title:
      <br>
      <input type="text" v-model="fields.title" class="form-control">
      <br>
      Comment Text:
      <textarea cols="30" rows="10" v-model="fields.comment_text" class="form-control"></textarea>
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
      }
    }
  },

  methods: {
    submit_form() {
      axios.post('/api/comments', this.fields)
        .then(response => {
          this.$router.push('/')
        });
    }
  }
}
</script>
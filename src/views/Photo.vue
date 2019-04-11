<template>
<div>
  <div v-if="photo">
    <div class="image">
      <img :src="photo.path" />
      <p class="photoTitle">{{photo.title}}</p>
      <p class="photoDate">
      <span v-if="photo.user.name">{{photo.user.name}}, </span>
        {{formatDate(photo.created)}}
      </p>
      <p>{{photo.description}}</p>
      <br/>
      <br/>
      <div v-if="user">
        <form @submit.prevent="addComment" class="pure-form pure-form-aligned">
          <div class="pure-control-group">
            <p>Comment on This Photo</p>
            <textarea v-model="addedComment" style="width: 55%"></textarea>
            <br />
          </div>
          <div class="pure-controls">
            <button type="submit" class="pure-button pure-button-primary">Comment</button>
          </div>
        </form>
      </div>
      <h3>Comments</h3>
      <div v-if="comments">
        <div v-for="comment in comments" v-bind:key="comment.created">
          <hr>
          <p>{{comment.comment}}</p>
          <p><i>-- {{comment.name}}, Posted {{formatDate(comment.created)}}</i></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Photo',
  data() {
    return {
      addedComment: '',
    }
  },
  props: {
    id: String
  },
  async created() {
    await this.$store.dispatch("getUser");
    await this.$store.dispatch("getPhoto", this.$route.query.id);
    await this.$store.dispatch("getComments", this.$route.query.id);
  },
  computed: {
    photo() {
      return this.$store.state.photos;
    },
    user() {
      return this.$store.state.user;
    },
    comments() {
      return this.$store.state.comments;
    }
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    },
    async addComment() {
      try {
        this.error = await this.$store.dispatch("addComment", {
          name: this.user.name,
          photoID: this.$store.state.photos,
          comment: this.addedComment
        });
        await this.$store.dispatch("getComments", this.$route.query.id);

      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>

<style scoped>
.photoTitle {
  margin: 0px;
  font-size: 1.2em;
}

.photoDate {
  margin: 0px;
  font-size: 0.9em;
  font-weight: normal;
}

p {
  margin: 0px;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  max-width: 600px;
  max-height: 600px;
  image-orientation: from-image;
}
</style>

<template>
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BlogPost',
    props: {
      post: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  /* Bileşene özgü CSS kuralları */
  .blog-post {
    background-color: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>
  
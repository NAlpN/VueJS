<template>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>Blog Posts</h2>
          <ul>
            <li v-for="(post, index) in posts" :key="index">
              <BlogPost :post="post" />
            </li>
          </ul>
        </div>
        <div class="col-md-4">
          <!-- Yan menü veya diğer içerik burada -->
        </div>
      </div>
    </div>
  </template>
  
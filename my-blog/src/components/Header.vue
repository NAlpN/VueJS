<template>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
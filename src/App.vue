<template>
  <div id="app">
    <my-header></my-header>
    <event-form></event-form>
    <my-article></my-article>
  </div>
</template>

<script>
//引入组件
import myHeader from './components/header.vue';
import eventForm from './components/event_form.vue';
import myArticle from './components/article.vue';
import Index from './store/index.js'

export default {
  name: 'app',
  components: {
    myHeader,
    eventForm,
    myArticle
  }
}
</script>

<style>
article,aside,dialog,footer,header,section,footer,nav,figure,menu {
	display:block
}

header,section,article {
    max-width: 960px;
    margin: 0 auto;
}

@media screen and (min-width: 961px) {
  header {
    max-width: 100%;
  }
}
</style>

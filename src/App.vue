<template>
  <div id="nav">
    <Header></Header>
    <main class="main">
      <router-view></router-view>
    </main>

    <Footer></Footer>

  </div>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
export default {
  components:{
    Header,
    Footer
  }
}
</script>

<style lang="scss">
#nav{

}
.main{
  padding-top: 100px;
}
@media screen and (max-width: 720px) {
  .main{
    padding-top: 60px;
  }
}

</style>

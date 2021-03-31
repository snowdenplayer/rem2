<template>
  <div class="sliderFeed">
    <splide :options="options">
      <splide-slide
          v-for="(person, idx) in feedbacks"
          :key="idx"
      >
        <div class="slide__content">
          <div class="slide__logo"><img :src="person.avatar" alt=""></div>
          <h3 class="slide__title">{{ person.name }}</h3>
          <p class="slide__text">{{ person.text }}</p>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import {feedbacks} from "@/data/data.feedback"

export default {
  name: "slider",
  data() {
    return {
      options: {
        type: 'loop',
        gap: '1rem',
        perPage: 3,
        perMove: 1,
        focus  : 'center',
        breakpoints: {
          991: {
            perPage: 2,
          },
          767: {
            perPage: 1,
          },
        },
      },
      feedbacks
    }
  },
  components: {
    Splide,
    SplideSlide
  }
}
</script>
<style lang="scss">
.sliderFeed {
  width: 100%;
  splide-slide .is-activeCard{
    border: 1px solid black;
  }
}
.splide__slide.is-active{
  background: rgba(254,196,29,0.3);
}
.slide__content {
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .slide__logo {
    img {
      border-radius: 50%;
      width: 110px;
      height: 110px;
    }
  }
  .slide__title{
    margin: 15px 0;
  }
  .slide__text{
    text-align: center;
    line-height: 20px;
  }
}
@media screen and (max-width: 767px){
  .splide__slide{
    background: rgba(254,196,29,0.3);
  }
}
</style>
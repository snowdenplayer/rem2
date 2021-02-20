<template>
  <router-link class="projects-wrap__item" :to="{name: 'itemView',params: {id: data.id}}" >
    <div class="projects-wrap__item-left">
      <div class="projects-wrap__item-left-header">
        {{ data.title }}
      </div>
      <div class="projects-wrap__item-left-text">
        {{ data.description }}
      </div>
      <div class="arrow"></div>
    </div>
    <div class="projects-wrap__item-right" >
     <img :src="data.cardImg" alt=""/>
    </div>
  </router-link>

</template>

<script>
export default {
  name: "projectCard",
  props: {
    data: {
      type: Object
    },
  },
  methods:{
    getImgUrl(pic){
      return '../assets/images/' + pic;
    }
  }
}
</script>

<style scoped lang="scss">
.projects-wrap__item {
  text-decoration: none;
  color: black;
  outline: none;
  width: 90%;
  display: flex;
  margin-bottom: 3px;

  &-right, &-left {
    width: 50%;
    height: 170px;
    box-sizing: border-box;

  }

  &-left {
    padding: 30px 20px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-header {
      text-decoration: none;
      font-size: 20px;
      font-family: 'OpenSansBold', sans-serif;

    }

    &-text {
      font-size: 14px;
    }

    .arrow {
      width: 50px;
      height: 2px;
      background: black;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        width: 10px;
        height: 2px;
        background: black;
        top: -2px;
        right: -1px;
        transform: rotate(25deg);
      }

      &::before {
        content: "";
        position: absolute;
        width: 10px;
        height: 2px;
        background: black;
        top: 2px;
        right: -1px;
        transform: rotate(-25deg);
      }
    }
  }

  &-right {
    overflow: hidden;
    position: relative;

    img {
      position: absolute;
      top: -50%;
      width: 100%;
    }

  }
}


@media screen and (max-width: 720px) {
  .projects {
    &-wrap {
      padding-top: 0;

      &__item {
        flex-direction: column;
        align-items: center;

        &-right, &-left {
          width: 70%;
        }

        &-left {
          &-header {

          }

          &-text {
            font-size: 14px;
          }
        }
      }

    }
  }

}

@media screen and (max-width: 480px) {
  .projects-wrap__item {
    flex-direction: column;
    align-items: center;

    &-right, &-left {
      width: 90%;
    }

    &-left {
      height: 100px;

      &-header {

      }

      &-text {
        display: none;
      }
    }
  }
}


</style>
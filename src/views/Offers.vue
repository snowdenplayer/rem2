<template>
  <div class="offers">
    <v-pop-up
        v-if="isInfoPopUpVisible"
        @closePopUp="closeModal"
    />

    <div class="offers__card"
         v-for="(item) in offersArray"
         :key="item.id"
    >
      <div class="wrap__card"
           :style="`background: linear-gradient(to ${item.direction}, #fec41d, #fff`"
      >
        <div class="offers__card-right"
             :style="`background-image: url(${item.bgImage})`"
             v-if="item.direction === 'right'">
        </div>
        <div
            class="offers__card-left"
            :style="[width <= 960 ? `background-image: url(${item.bgImage})`: 'background: #fff']"
        >
          <div class="offers__card-left__header">
            <h1>{{ item.title }}</h1>
          </div>
          <p class="card__text" v-html="item.description"/>
          <button class="card__button" @click="showPopUpInfo">Замовити</button>
        </div>
        <div class="offers__card-right"
             :style="`background-image: url(${item.bgImage})`"
             v-if="item.direction === 'left' ">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vPopUp from '../components/popup'
import {offersArray} from '../data/data.offers'

export default {
  name: "Offers",
  components: {
    vPopUp
  },
  data() {
    return {
      width: window.innerWidth,
      isInfoPopUpVisible: false,
      offersArray,
    }
  },
  methods: {
    showPopUpInfo() {
      this.isInfoPopUpVisible = true
    },
    closeModal() {
      this.isInfoPopUpVisible = false
    },
    updateWidth() {
      this.width = window.innerWidth;
    },

  },
  created() {
    window.addEventListener('resize', this.updateWidth);
    console.log(this.width)
  },
}
</script>

<style lang="scss">

h3 {
  color: #fec41d;
}

.lastChild {
  background: red;
}

.offers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__card {
    height: calc(100vh);
    width: 95%;
    display: flex;
    .wrap__card {
      display: flex;
    }
    .offers__card-left, .offers__card-right {
      height: calc(100% - 100px);
    }
    &-right {
      width: 60%;
      background-position: center;
    }

    &-left {
      background: #fff;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      box-sizing: border-box;
      padding: 20px 20px;

      &__header {
        width: 90%;
        display: flex;
        justify-content: center;
        border: 2px solid black;
        padding: 10px 20px;
        margin-bottom: 20px;
      }

      .card__text {
        margin-bottom: 10px;
        font-size: 18px;
      }
    }

    .card__button {
      color: white;
      font-family: Arial;
      text-transform: uppercase;
      font-weight: bolder;
      padding: 15px 50px;
      border: 2px solid #fec41d;
      background: #fec41d;
    }
  }
}

@media screen and (max-width: 960px) {
  .offers {
    .wrap__card {
      height: 100vh !important;
      background: transparent !important;


    .offers__card {
      height: 100% !important;
      width: 100%;
      overflow: hidden;

      &-right {
        display: none;
      }

      &-left {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        overflow: hidden;
        color: white;
        position: relative;


        &__header {
          border: 2px solid white;
          z-index: 2;
          margin: 0;
        }

        .card__text {
          font-size: 20px;
          z-index: 2;
        }

        .card__button {
          z-index: 2;
        }
      }

      &-left::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
      }
    }
  }
  }
}

@media screen and (max-width: 1050px) {
  .offers {
    &__card {
      width: 100%;
    }
  }
}
</style>
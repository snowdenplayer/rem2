<template>
  <div class="home">
    <section class="our">
      <div class="our__container container">
        <div class="wrap__info">
          <div class="our__logo">Ремонтна <br> компанія</div>
          <div class="our__text">Робимо Ваші оселі комфортними<br>більше 3-х років</div>

          <div class="our__button">
            <router-link to="/about" class="our__link">Про нас</router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="experience">
      <div class="experience__container container">
        <h1 class="experience__header container__header">Наші переваги</h1>
        <div class="experience__boxes">
          <div class="box box-white">
            <div class="num">30+</div>
            зданих <br> проєктів
          </div>
          <div class="box box-yellow">Лише<br>якісні<br>інструменти</div>
          <div class="box box-dark">Працюємо<br>з<br>гарантією</div>
          <div class="box box-gray">
            <div class="num">3+</div>
            роки <br> досвіду
          </div>
        </div>
      </div>
    </section>
    <section class="slider">
      <div class="slider__container container">
        <h1 class="slider__header container__header">Відгуки клієнтів</h1>
        <sliderFeedBacks></sliderFeedBacks>
      </div>
    </section>
  </div>
</template>

<script>
import sliderFeedBacks from "../components/sliderFeedbacks"

export default {
  name: 'Home',
  components: {
    sliderFeedBacks
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/index";

.our {
  padding-top: 100px;
  background-image: url("../assets/images/sectionONas.jpg");
  background-color: #f0f0f0;
  background-size: 65% 100vh;
  background-position: right;
  background-repeat: no-repeat;
  height: 100vh; //480px
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__logo {
    font-family: arial;
    font-size: 60px;
  }

  &__text {
    margin-top: 20px;
    font-size: 19px;
    color: #8e8e8e;
  }

  &__button {
    margin-top: 30px;

    .our__link {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      padding: 13px 20px;
      border: 2px solid #5f5f5f;
      text-transform: uppercase;
      text-decoration: none;
      color: black;
      font-weight: bolder;
    }
  }
}

@media screen and (max-width: 1024px) {
  .our {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }

    background-size: cover;

    &__container {
      align-items: flex-start;
    }

    .wrap__info {
      z-index: 3;
    }

    &__logo {
      z-index: 3;
      color: #fff;
      text-align: left;
    }

    &__text {
      color: #fff;
      z-index: 3;
    }

    &__button {
      z-index: 3;

      .our__link {
        color: #fff;
        border-color: #fec41d;

      }
    }
  }
}

@media screen and (max-width: 640px) {
  .our {
    &__container {
      align-items: center;
    }

    &__logo {
      text-align: left;
    }

    &__button {
      .our__link {
        width: 85%;
      }
    }
  }
}

/*end our section*/
/*experience start*/
.experience {
  height: 600px;
  background-color: #f0f0f0;
  background-size: 35% 100%;
  background-image: url("../assets/images/experience.jpeg");
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;

  box-sizing: border-box;

  &__header {
    margin-bottom: -50px;
  }

  &__container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }

  &__boxes {
    display: flex;
    flex-wrap: wrap;
    width: 400px;
    border: 5px solid white;

    .box {
      box-sizing: border-box;
      width: 200px;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: Popins;
      flex-direction: column;
      font-size: 25px;
      font-weight: bold;
      text-align: center;

      .num {
        font-size: 35px;
      }

      &-yellow {
        background-color: #fec41d;
        color: #fff;
      }

      &-dark {
        background-color: #252527;
        color: #fff;
      }

      &-gray {
        background-color: #f0f0f0;
      }

      &-white {
        background-color: #fff;
      }
    }

  }


}

@media screen and (max-width: 1024px) {
  .experience {
    background: url("../assets/images/experienceLong.jpeg");
    background-size: cover;
    background-position: center;

    &__container {
      align-items: center;

    }
  }
}

@media screen and (max-width: 640px) {
  .experience {
    height: 600px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 2;
    }

    &__container {
      align-items: center;
      z-index: 3;
    }

    &__header {
      color: #fff;

      margin-bottom: 0px;
    }

    &__boxes {
      flex-direction: column;
      border: none;
      width: 90%;

      .box {
        width: 100%;
        height: 130px;
      }

    }
  }
}

/*end experience*/
.slider{
  display: flex;
  justify-content: center;
  &__container{
    display: flex;
    flex-direction: column;
  }
  &__header{
    margin-top: 0.5em;
    letter-spacing: -1px;
    align-self: center;
    justify-self: center;
  }
}


</style>

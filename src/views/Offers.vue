<template>
  <div class="offers">
    <div class="offers__card"
         v-for="item in offersArray"
         :key="item.id"
    >
      <div class="offers__card-right" v-if="item.direction === 'right'">
      </div>
      <div class="offers__card-left" >
        <div class="offers__card-left__header">
          <h1>{{item.title}}</h1>
        </div>
        <p class="card__text" v-html="item.description" />
        <button class="card__button">Замовити</button>
      </div>
      <div class="offers__card-right" v-if="item.direction === 'left' ">
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Offers",
  data() {
    return {
      offersArray: [
        {
          id: 1,
          title: "Ремонт квартир",
          description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cumque deserunt
          distinctio dolor dolorum eos est eveniet excepturi exercitationem expedita fugit illo impedit ipsam ipsum
          labore natus, neque numquam officiis perferendis provident quam quia quidem quisquam quod quos repellendus
          <br> <br>
          sequi soluta suscipit temporibus ut vel velit veritatis? Accusantium consectetur corporis delectus, dolorem
          iusto laboriosam, laudantium modi necessitatibus odio quae quam quis recusandae similique sit tempore
          `,
          direction: "left"
        },
        {
          id: 2,
          title: "Ремонт будинку",
          description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cumque deserunt
          distinctio dolor dolorum eos est eveniet excepturi exercitationem expedita fugit illo impedit ipsam ipsum
          labore natus, neque numquam officiis perferendis provident quam quia quidem quisquam quod quos repellendus
          <br> <br>
          sequi soluta suscipit temporibus ut vel velit veritatis? Accusantium consectetur corporis delectus, dolorem
          iusto laboriosam, laudantium modi necessitatibus odio quae quam quis recusandae similique sit tempore
          `,
          direction: "right"
        },
        {
          id: 3,
          title: "Ремонт кімнат",
          description: `
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid cumque deserunt
          distinctio dolor dolorum eos est eveniet excepturi exercitationem expedita fugit illo impedit ipsam ipsum
          labore natus, neque numquam officiis perferendis provident quam quia quidem quisquam quod quos repellendus
          <br> <br>
          sequi soluta suscipit temporibus ut vel velit veritatis? Accusantium consectetur corporis delectus, dolorem
          iusto laboriosam, laudantium modi necessitatibus odio quae quam quis recusandae similique sit tempore
          `,
          direction: "left"
        }
      ]
    }
  }
}
</script>

<style lang="scss">

h3 {
  color: #fec41d;
}

.offers {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__card {
    height: calc(100vh - 100px);
    width: 90%;
    display: flex;

    &-left, &-right {
      height: 100%;
    }

    &-right {
      width: 60%;
      background-image: url('../assets/images/offers/kvartBuild.jpg');
      background-position: center;
    }

    &-left {
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

  &__card:nth-child(2) {
    .offers__card-right {
      background-image: url("../assets/images/offers/houseBuild.jpg");
    }
  }

  &__card:nth-child(3) {
    .offers__card-right {
      background-image: url("../assets/images/offers/kvartBuild1.jpg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }
}

@media screen and (max-width: 895px) {
  .offers {

    &__card {
      height: calc(100vh - 60px);
      width: 100%;
      overflow: hidden;

      &-right {
        display: none;
      }

      &-left {
        width: 100%;
        height: 100%;
        background-image: url('../assets/images/sectionONas.jpg');
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
        background-color: rgba(0, 0, 0, 0.25);
        z-index: 1;
      }
    }
  }
}
</style>
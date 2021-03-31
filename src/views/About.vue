<template>
  <div class="about">
    <div class="container">
      <viewCardGrid
          :data="imgArr">
      </viewCardGrid>
      <div class="wrap__menu">
        <ul class="menu">
          <li
              v-for="item in arrOfAbout"
              :key="item.id"
              class="menu__item"
          >
            <img :src="item.pathImg" alt="">
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
      <div class="about__text">Ми <span>ремонтна компанія</span>, яка успішно функціонує більше <span>3-х років</span>.
        За цей час у нас уже було з декілька десятків об‘єктів, які залишили своїй власників повністю задоволеними.
        Ми проводимо ремонтні роботи у новобудовах, старіших квартирах та будинках. Окрім комплексних робіт,
        ми також маємо можливість зробити окремий ремонт проблемної кімнати. <br><br>
        Наша головна мета це
        зменшити до мінімуму стрес клієнтів при ремонті Вашої оселі та зробити усе можливе, щоб
        фінальний результат приніс Вам лише позитивні емоції. За таким мотивом ми і працюємо
        увесь цей час. У цьому нам допомагають <span>кваліфіковані майстри</span>, які щоразу оновлюють методики
        праці згідно нових тенденцій, а також нові інструменти, які лише допомагають пришвидшити роботу
        та виконати усе вчасно. <br><br>
        Після роботи ми завжди залишаємо місце чистим, тому що дбаємо не тільки
        за функціональний стан речей, а й за естетичним виглядом оселі. Ми будемо раді зробити комофортним
        і Ваш дім, тому якщо готові до співпраці — <span>заповнюйте заявку</span>, дзвоніть нам за телефоном та слідкуйте
        за нами у соціальних мережах.</div>
    </div>
  </div>
</template>
<script>
import viewCardGrid from "../components/viewCardGrid";
import {aboutData} from "../data/data.about"
export default {
  name: "About",
  data(){
    return{
        imgArr: aboutData,
        arrOfAbout:[
          {
            id: 1,
            pathImg: require('../assets/images/svg/icon1.svg'),
            text: '3 роки досвіду в нашій справі'
          },
          {
            id: 2,
            pathImg: require('../assets/images/svg/icon2.svg'),
            text: 'Якість і терміни виконання'
          },
          {
            id: 3,
            pathImg: require('../assets/images/svg/icon3.svg'),
            text: 'Усі процеси беремо на себе'
          },
          {
            id: 4,
            pathImg: require('../assets/images/svg/icon4.svg'),
            text: 'Робимо квартири під ключ'
          },
          {
            id: 5,
            pathImg: require('../assets/images/svg/icon5.svg'),
            text: 'Відсутність фінансових ризиків'
          },
          {
            id: 6,
            pathImg: require('../assets/images/svg/icon6.svg'),
            text: 'Даємо гарантію'
          },
        ]
    }
  },
  components: {
    viewCardGrid
  },
}
</script>
<style scoped lang="scss">
@import '../assets/styles/index';
.about{
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  .container{
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .wrap__menu{
    display: flex;
    justify-content: center;
    .menu{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 80%;
      &__item{
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 20px 0;
        img{
          width: 75px;
          height: 75px;
          margin-bottom: 25px;
        }
      }
    }
  }
  &__text{
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    line-height: 30px;
    br{
      margin-bottom: 10px;
    }
    span{
      font-weight: bolder;
    }
  }
}
@media screen and (max-width: 720px){
  .about{
    .menu{
      width: 100%!important;
      &__item{
        width: 50%!important;
      }
    }
  }
}
</style>

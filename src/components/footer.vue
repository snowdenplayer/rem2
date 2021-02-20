<template>
<div class="v-footer">
  <footer class="footer">
    <div class="container footer__container">
      <div class="footer__info">
        <img class="footer__logo" src="../assets/images/logo.png" alt="logo">
        <div class="footer__media-items">
          <div class="media__item facebook"><a href="" target="_blank"><img src="../assets/images/facebook.png" alt=""></a></div>
          <div class="media__item insta"><a href="" target="_blank"><img src="../assets/images/insta.png" alt=""></a></div>
          <div class="media__item viber"><a href="" target="_blank"><img src="../assets/images/viber.png" alt=""></a></div>
          <div class="media__item telegram"><a href="" target="_blank"><img src="../assets/images/telegram.png" alt=""></a></div>

        </div>
      </div>
      <div class="footer__menu">
        <ul class="footer__menu-list">
          <li><router-link to="/about" class="footer__menu-list-item">Про нас</router-link></li>
          <li><router-link to="/projects" class="footer__menu-list-item">Проєкти</router-link></li>
          <li><router-link to="/offers" class="footer__menu-list-item">Послуги</router-link></li>
        </ul>
      </div>
      <div class="footer__contacts">
        <a class="footer__contacts-number" href="tel:+3801553777">0 (50) 155-37-77</a>
        <a class="footer__contacts-email" href="mailto:voroshyk@icloud.com">voroshyk@icloud.com</a>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
name: "footer"
}
</script>

<style scoped lang="scss">
@import "../assets/styles/index";
.footer{
  width: 100%;
  height: 120px;
  background-color: #252527;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 80px;

  }
  &__info{
    display: flex;
    justify-content: space-between;

    .footer__logo{
      width: 100px;
      height: 100%;
    }
    .media__item{

      img{
        width: 30px;
        height: 30px;
      }
    }
    .footer__media-items{
      display: flex;
      width: 70px;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-left: 20px;
    }
  }
  &__menu{
    /*align-self: flex-start;*/
    &-list{
      display: flex;
      flex-direction: row;
      li{
        margin: 0 30px;
      }
      &-item{

        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        font-family: 'OpenSansBold',sans-serif;
        outline: none;
      }
    }
  }
  &__contacts{
    text-align: right;
    display: flex;
    flex-direction: column;

    a{
      text-decoration: none;
      color: #fff;
      font-size: 17px;
      font-family: 'OpenSansBold',sans-serif;

    }
    &-email{
      margin-top: 10px;
    }
  }
}
@media screen and (max-width: 830px){
  .footer{
    &__menu-list{
      height: 100%;
      flex-direction: column;
      li{
        margin: 5px 0;
      }
    }
  }
}
@media screen and (max-width: 640px){
  .footer{
    &__menu-list{
      display: none;
    }
    &__info{
      .footer__media-items{
        margin-left: 10px;
      }
      .footer__logo{
        max-width: 100px;
      }
    }
  }
}
@media screen and (max-width: 389px){
  .footer{
    &__info{
      width: 100%;
    }
    &__contacts{
      display: none;
    }
  }
}
/*end footer*/

</style>
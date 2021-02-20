<template>
  <div class="hello">
    <header class="header">
      <div class="header__container container">
        <div class="header__logo"><img src="../assets/images/logo.png" alt="" class="logo__img"></div>
        <div class="header__info">
          <div class="header__contacts__icon"><i class="fas fa-phone"></i></div>
          <div class="header__burger" @click=" show = !show "  ><i class="fas fa-bars"></i></div>
          <nav class="header__menu" :class="{active:show}">
            <ul class="menu-wrap" >
              <li v-for="(menu,index) in headerMenuList" :key="index" @click=" show = !show">
                <router-link :to="menu.path" class="menu__link" >
                  {{menu.name}}
                </router-link>
              </li>
            </ul>
          </nav>
          <button class="header__contact">Контакт</button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'header',
  props: {
    msg: String
  },
  data(){
    return{
      headerMenuList :[
        {name: 'Головна',path: '/'},
        {name: 'Про нас',path: '/about'},
        {name: 'Проэкти',path: '/projects'},
        {name: 'Послуги',path: '/offers'},
      ],
      show: false
    }
  },
  watch:{
    show (nv) {
      if(nv === true){
        document.body.classList.add("disableScroll");
      }else{
        document.body.classList.remove("disableScroll")
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container {
  width: 1200px;
  &__header{
    font-size: 60px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (max-width: 1366px){
  .container {
    width: 992px;
  }
}
@media (max-width: 1024px){
  .container {
    width: 768px;
  }
}
@media (max-width: 798px){
  .container {
    width: 90%;

    &__header{
      font-size: 40px;
    }
  }
}
@media (max-width: 520px){
  .container {
    padding: 0 10px;
    width: 98%;
  }
}
/*header*/
.header {
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 50;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 2;

  }
  &__container{
    position: relative;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
  &__burger{
    display: none;
  }
  &__logo{
    z-index: 3;
    .logo__img{
      height: 70px;
    }
  }
  &__info{
    display: flex;
    align-items: center;
  }
  &__menu{

    .menu-wrap {
      display: flex;
      position: relative;
      z-index: 2;
      li{
        list-style: none;
      }
      .menu__link {
        font-size: 18px;
        text-decoration: none;
        color: black;
        padding: 10px 15px;
        transition: 1s ease;
        position: relative;
        outline: none;
        &::after{
          content: " ";
          position: absolute;
          display: block;
          bottom: 0;
          left: 50%;
          width: 0%;
          height: 2px;
          background: #000;
          transition: width .3s ease-in-out;
          transform: translateX(-50%);
        }
        &:hover::after{
          width: 100%;
        }
      }

    }


  }
  &__contact{
    width: 90px;
    height: 40px;
    background: transparent;
    outline: none;
    border: 2px solid #6b6b6b;
    font-family: 'Popins';
    font-size: 18px;
    margin-left: 15px;
    position: relative;
    z-index: 2;

  }
  &__contacts__icon{
    display: none;
  }
}
@media screen and (max-width: 720px){
  .header {
    &__container{
      height: 60px;
    }
    &__logo{
      .logo__img{
        height: 40px;
      }
    }
    &__burger{
      display: block;
      font-size: 30px;
      z-index: 3;
      cursor: pointer;
    }
    &__menu{
      position: fixed;
      top: -120%;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: #f0f0f0;
      padding: 100px 0 0 0;
      transition: all 0.3s ease 0s;
      &.active{
        top: 0;
      }
      .menu-wrap{
        display: block;
        li{
          margin: 0 0 20px 0;
          display: flex;
          justify-content: center;
        }

        .menu__link {
          text-transform: uppercase;
          font-weight: bolder;
        }
      }
    }
    &__contact{
      display: none;
    }
    &__contacts__icon{
      cursor: pointer;
      margin-right: 20px;
      display: block;
      font-size: 25px;
      z-index: 3;
    }
  }
}

/*end header*/
</style>

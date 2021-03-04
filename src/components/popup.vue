<template>
  <div class="popup">
    <div class="popup__header">
      <p>Замовити зворотній дзвінок</p>
      <p>
        <i class="material-icons" style="cursor: pointer" @click="closeModal">close</i>
      </p>
    </div>
    <div class="popup__content">
      <form action="https://formspree.io/f/xknplyad" method="post" class="form-container">
      <label for="name"><b>Ім'я</b></label>
      <input type="text" placeholder="Ім'я" name="name" required>

      <label for="tel"><b>Телефон</b></label>
      <input type="tel" placeholder="+380509494349" name="tel"  required>

        <label for="coment"><b>Коментар за бажанням</b></label>
        <input type="text" placeholder="Коментар" name="coment"  required>

        <button class="submit__button" type="submit" >Відправити</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  methods:{
    closeModal(){
      this.$emit('closePopUp')
    }
  }
}
</script>

<style lang="scss">
.popup {
  padding: 16px;
  position: fixed;
  top: 170px;
  max-width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .form-container {
      max-width: 300px;
      padding: 10px;
      background-color: white;

    }
    .form-container input[type=text], .form-container input[type=tel] {
      width: 90%;
      padding: 15px;
      margin: 5px 0 22px 0;
      border: none;
      background: #f1f1f1;
    }

    .form-container input[type=text]:focus, .form-container input[type=tel]:focus {
      background-color: #ddd;
      outline: none;
    }
    .submit__button{
      border: none;
      padding: 8px;
      color: #ffffff;
      background: #fec41d;
    }
  }
  &__footer{
    display: flex;
    justify-content: flex-end;

    button{
      border: none;
    }

    .close_modal{
      padding: 8px;
      color: white;
      background: red;
    }
  }
}
</style>
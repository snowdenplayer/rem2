<template>
  <div class="popup">
    <div class="popup__header">
      <span>Замовити зворотній звінок</span>
      <span>
        <i class="material-icons" style="cursor: pointer" @click="closeModal">close</i>
      </span>
    </div>
    <div class="popup__content">
      <form action="https://formspree.io/f/xknplyad" method="post" class="form-container">
      <label for="email"><b>Ім'я</b></label>
      <input type="text" placeholder="Ім'я" name="email" required>

      <label for="psw"><b>Телефон</b></label>
      <input type="tel" placeholder="+380509494349" name="psw" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
      </form>
    </div>
    <div class="popup__footer">
      <button class="submit__button">Відправити</button>
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

    /* When the inputs get focus, do something */
    .form-container input[type=text]:focus, .form-container input[type=tel]:focus {
      background-color: #ddd;
      outline: none;
    }
  }
  &__footer{
    display: flex;
    justify-content: flex-end;

    button{
      border: none;
    }
    .submit__button{
      padding: 8px;
      color: #ffffff;
      background: #fec41d;
    }
    .close_modal{
      padding: 8px;
      color: white;
      background: red;
    }
  }
}
</style>
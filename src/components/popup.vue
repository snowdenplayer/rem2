<template>
  <div class="popup">
    <div class="popup__header">
      <span>Name</span>
      <span>
        <i class="material-icons">close</i>
      </span>
    </div>
    <div class="popup__content">
      <slot></slot>
    </div>
    <div class="popup__footer">
      <button class="close_modal">Close</button>
      <button class="submit__button">Submmit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup"
}
</script>

<style lang="scss">
.popup {
  padding: 16px;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__content{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__footer{

    .submit__button{
      padding: 8px;
      color: #ffffff;
      background: #26ae68;
    }
    .close_modal{
      padding: 8px;
      color: white;
      background: red;
    }
  }
}
</style>
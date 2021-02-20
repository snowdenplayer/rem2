<template>
  <div class="projects">
    <div class="container projects__container">
      <div class="projects-wrap">
      <projectCard
          v-for="(item,index) in projectsData"
          :key="item.id"
          :data="item"
          @click="getIdCard(index)"
      >

      </projectCard>
      </div>
    </div>
  </div>
</template>

<script>
import {projectsData} from "../data/data.projects"
import projectCard from "../components/projectCard";
export default {
  name: "Projects",
  data(){
    return{
      projectsData: projectsData,
      idCard: {},

    }
  },
  components:{
    projectCard,
  },
  methods:{
    getIdCard(index){
      this.idCard = this.projectsData[index]
      console.log(this.idCard)
    }
  }

}
</script>

<style scoped lang="scss">
@import '../assets/styles/index';



.projects{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  &__container{

  }
  &__header{

  }
  &-wrap{
    width: 100%;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__item{
      text-decoration: none;
      color: black;
      outline: none;
      width: 90%;
      display: flex;
      margin-bottom: 3px;
      &-right,&-left{
        width: 50%;
        height: 170px;
        box-sizing: border-box;

      }
      &-left{
        padding: 30px 20px;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        &-header{
          text-decoration: none;
          font-size: 20px;
          font-family: 'OpenSansBold',sans-serif;

        }
        &-text{
          font-size: 14px;
        }
        .arrow{
          width: 50px;
          height: 2px;
          background: black;
          position: relative;
          &::after{
            content: "";
            position: absolute;
            width: 10px;
            height: 2px;
            background: black;
            top: -2px;
            right: -1px;
            transform: rotate(25deg);
          }
          &::before{
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
      &-right{
        overflow: hidden;
        position: relative;
        img{
          position: absolute;
          width: 100%;
        }

      }
    }
  }
}
@media screen and (max-width: 720px){
  .projects{
    &-wrap{
      padding-top: 0;
      &__item{
        flex-direction: column;
        align-items: center;
        &-right,&-left{
          width: 70%;
        }
        &-left{
          &-header{

          }
          &-text{
            font-size: 14px;
          }
        }
      }

    }
  }

}

@media screen and (max-width: 480px){
  .projects{
    &-wrap{
      padding-top: 0;
      &__item{
        flex-direction: column;
        align-items: center;
        &-right,&-left{
          width: 90%;
        }
        &-left{
          height: 100px;
          &-header{

          }
          &-text{
            display: none;
          }
        }
      }
    }

  }

}


</style>
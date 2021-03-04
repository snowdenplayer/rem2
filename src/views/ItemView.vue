<template>
<div class="itemView">
  <viewCardGrid
      :data="itemData.arrImg" class="viewCardGrid">

  </viewCardGrid>
  <div class="itemView__text" v-html="itemData.textInProjects" />
</div>
</template>

<script>
import {projectsData} from "../data/data.projects"
import viewCardGrid from "../components/viewCardGrid";
export default {

name: "ItemView",
  components:{
    viewCardGrid
  },
  data(){
    return{
      itemData: this.findProjectElById(Number(this.$route.params.id)),
    }
  },
  methods:{
    findProjectElById(id){
      const index = projectsData.findIndex(item => item.id === id)
      return index === -1 ? {} : projectsData[index]
    }
  }
}
</script>

<style scoped>
.itemView{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.viewCardGrid{
  width: 90%;
}
.itemView__text{
  margin: 20px 0;
  width: 90%;
  border: 2px solid #fec41d;
  padding: 10px;
  box-sizing: border-box;
  font-size: 25px;
}


</style>
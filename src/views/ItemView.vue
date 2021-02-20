<template>
<div class="itemView">
  <viewCardGrid
      :data="itemData.arrImg" class="viewCardGrid">

  </viewCardGrid>
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
  justify-content: center;
  align-items: center;

}
.viewCardGrid{
  width: 90%;
}

</style>
<template>
  <div id="app">
    <div id="outer"  ref="imageWrapper" >
        <div id="wrp" v-if="isShow">
          <News/>
        </div>
     
    </div>
       <img :src="this.imgUrl" alt="预览图">
    <p>By:luzhenfang 2020 4 10</p>
  </div>
</template>
 
<script>
import News from './components/News' 
import html2canvas from "html2canvas"

export default {  
  name: 'App',
  components: {
    News
  },

  data(){
    return{
      imgUrl:null,
      isShow:true
    }
  },
    mounted(){
    setTimeout(()=>{
      this.toImage()
    },800);
  },methods:{
    toImage() {
       window.pageYOffset = 0;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
        html2canvas(this.$refs.imageWrapper).then(canvas => {
          let dataURL = canvas.toDataURL("image/png");
          this.imgUrl = dataURL;
          this.isShow=false
      })
  }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 400px;
  margin: 0 auto;

}
#outer{
  padding: 10px;
}
#wrp{
  border: 3px solid rgb(255, 187, 0);
}
img{
  margin: 0 auto;
  max-width: 380px;
}
</style>

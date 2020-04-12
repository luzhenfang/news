<template>
  <div id="wrapper">
    <div id="top" :style="{backgroundColor:week.color}">
      <div id="week">
      {{week.ch}}
      <div id="en" style="font-size:35px;font-family:Bubblegum Sans">
        {{week.en}}
      </div>
    </div>
  


    </div>

    <div id="bottom">
      <div id="date">
        {{data.month+"月"+data.day+"日,"+this.week.ch}}
      </div>
      <div id="history">
        <ol>
           <li v-for="ht in data.historyList">{{ht.event}}</li>
        </ol>
      </div>
      <div id="news">
          <ol>
            <li v-for="nw in data.newsList">{{nw.title}}</li>
          </ol>
      </div>
      <p style="text-align:left;font-size:20px;font-weight:500;">今日微语</p>
      <div id="sentence">
      {{data.sentence.sentence}}

    </div>
  
    </div>

  </div>
</template>

<script>

export default {
  name: 'index',
    created(){
    this.$api.post("http://lzfblog.cn:2020/news")
    .then((res)=>{
      this.data=res.data
      this.week = this.toWeek(res.data.week)
    
    })
  },
  data () {
    return {
      data:{month:null,sentence:{sentence:null}},
      week:{ch:null,en:null}
    }
  },methods:{
    toWeek(i){
      let w ="null"
      switch(i){
        case 1:w={ch:"星期一",en:"Monday",color:"#5CAB7D"};break 
        case 2:w={ch:"星期二",en:"Tuesday",color:"#F16B6F"};break 
        case 3:w={ch:"星期三",en:"Wednesday",color:"#00b9f1"};break 
        case 4:w={ch:"星期四",en:"Thursday",color:"#f199bc"};break 
        case 5:w={ch:"星期五",en:"Friday",color:"#f26d5b"};break 
        case 6:w={ch:"星期六",en:"Saturday",color:"#bf209f"};break 
        case 7:w={ch:"星期日",en:"Sunday",color:"#f9c00c"};break 
      }
      return w
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 #wrapper{
   margin: 20px;
 }
 #date{
   text-align: left;
   margin: 10px;
   font-size: 22px;
 }
  #top{
    border-radius: 10px;
 
  }
  #week{
    font-size: 70px;
    font-weight: 1000;
    color: white;
    padding: 20px;
  }
  #sentence{
    font-size: 20px;
    padding: 20px;
  }

 #news{
    padding: 10px;
  }

  #history{
    padding: 10px 0;
  }
  #history ol{
    padding: 0;
    list-style: none;
  }

  #history ol li{
    text-align: left;
    line-height: 20px;
    margin: 10px;
  }
  #news{
    padding: 10px;
  }
  #news ol{
    padding: 0;
  }
  #news ol li{
    text-align: left;
    line-height: 20px;
    margin: 10px;
  }

</style>

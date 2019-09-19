<template>
  <div class="largeImg">
    <img :style="style" :class="{'active':isChoose}" @click="isChoose = !isChoose" :src="imgData.src" :alt="imgData.alt">
  </div>
</template>
<script>
  export default {
    name: "large_img",
    data() {
      return {
        isChoose:false
      };
    },
    props: {
        imgData:{
            type: Object,
            default: function (){
                return {
                    src:'',
                    alt:'',
                }
            }
        },
        styleData:{
            type: Object,
            default: function (){
                return  { }
            }
        },
    },
    computed:{
        style(){
            return Object.keys(this.styleData).map(k=>k+":"+this.styleData[k]+";").join("");
        }
    },
    methods: {
  
    },
  }
</script>

<style scoped>
  img {    
       transform: scale(1);          /*图片原始大小1倍*/
       transition: all ease 0.5s;   /*图片放大所用时间*/
       cursor: pointer;
  }

  img.active {     
       transform: scale(3);          /*图片需要放大3倍*/
       position: absolute;           /*是相对于前面的容器定位的，此处要放大的图片，不能使用position：relative；以及float，否则会导致z-index无效*/
       z-index: 100; 
  } 
</style>

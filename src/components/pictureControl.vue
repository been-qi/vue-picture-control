<template>
  <div id="pictureControl">
    <div id="imgBox" @mousewheel="scaleImg($event)"><img id="img" border="0" :src="imgSrc" /></div>
    
  </div>
</template>

<script>
export default {
  name: 'pictureControl',
  props: {
    imgSrc: String
  },
  data() {
    return {
      zoomVal: 1,
      left: 0,
      top: 0,
      currentX: 0,
      currentY: 0,
      flag: false
    };
  },
  watch: {},
  mounted() {
    // if(!this.imgSrc){
    //   this.imgSrc = require('./img/test01.jpg')
    // }
    this.startDrag(document.getElementById('imgBox'), document.getElementById('img'));
  },
  methods: {
    getCss(o, key) {
      return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
    },
    scaleImg(event) {
      var ele = event.currentTarget;

      var o = ele.getElementsByTagName('img')[0];
      console.log(event.wheelDelta);
      this.zoomVal += event.wheelDelta / 1200;
      if (this.zoomVal >= 0.2) {
        o.style.transform = 'translateX(-50%) scale(' + this.zoomVal + ')';
      } else {
        this.zoomVal = 0.2;
        o.style.transform = 'translateX(-50%) scale(' + this.zoomVal + ')';
        return false;
      }
    },
    startDrag(container, target, callback) {
      if (this.getCss(target, 'left') !== 'auto') {
        this.left = this.getCss(target, 'left');
      }
      if (this.getCss(target, 'top') !== 'auto') {
        this.top = this.getCss(target, 'top');
      }
      var _this = this;
      //o是移动对象
      container.onmousedown = function(event) {
        _this.flag = true;
        if (!event) {
          event = window.event;
          //防止IE文字选中
          container.onselectstart = function() {
            return false;
          };
        }
        var e = event;
        _this.currentX = e.clientX;
        _this.currentY = e.clientY;
      };
      document.onmouseup = function() {
        _this.flag = false;
        if (_this.getCss(target, 'left') !== 'auto') {
          _this.left = _this.getCss(target, 'left');
        }
        if (_this.getCss(target, 'top') !== 'auto') {
          _this.top = _this.getCss(target, 'top');
        }
      };
      document.onmousemove = function(event) {
        var e = event ? event : window.event;
        if (_this.flag) {
          var nowX = e.clientX,
            nowY = e.clientY;
          var disX = nowX - _this.currentX,
            disY = nowY - _this.currentY;
          target.style.left = parseInt(_this.left) + disX + 'px';
          target.style.top = parseInt(_this.top) + disY + 'px';
          if (typeof callback == 'function') {
            callback((parseInt(_this.left) || 0) + disX, (parseInt(_this.top) || 0) + disY);
          }
          if (event.preventDefault) {
            event.preventDefault();
          }
          return false;
        }
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#pictureControl{
  width: 100%;
  height: 100%;
  // padding: 30px;
  box-sizing: border-box;
  #imgBox {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    border: 1px dashed #999;
  }
  #imgBox img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: contain;
    cursor: move;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

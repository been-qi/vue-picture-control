import pictureControl from './pictureControl.vue'
let install = (Vue)=>{
    if (install.installed) return;
    install.installed;
    console.log(pictureControl)
    Vue.component('pictureControl',pictureControl)
}
if(typeof window!=='undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install
}
# picture-control

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 使用方法

```
npm install vue-picture-control

//main.js
import pictureControl from vue-picture-control
import 'vue-picture-control/lib/vue-picture-control.css'
app.use(pictureControl)

//template.vue 调用
<picture-control :imgSrc="imgSrc"></picture-control>

imgSrc支持服务器路径，本地文件使用require("./img.png")

```

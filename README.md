用 vue 做的 todolist, 教學用

建議教材 [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)](https://www.udemy.com/vuejs-2-the-complete-guide/)  
[Vue api](https://vuejs.org/v2/api/)

---

#### git

安裝 git  
[mac](https://gitbook.tw/chapters/environment/install-git-in-mac.html)  
[windows](https://gitbook.tw/chapters/environment/install-git-in-windows.html)

[git 教學](https://gitbook.tw/)

---

#### create vue project

```bash
npx @vue/cli create <目錄名稱>
ex: npx @vue/cli create my-vue-project
```

開發模式

```bash
npm run serve
```

production 模式

```bash
npm run build
```

---

安裝 sass

```bash
npm i node-sass sass-loader
```

x.vue

```js
<style lang="scss">your css</style>
```

---

安裝 boostrap(only css)

```bash
npm i boostrap
```

main.js

```js
import "bootstrap/dist/css/bootstrap.css";
```

---

#### clone project and deploy

- clone project

```bash
git clone https://github.com/nodoubt0322/todolist-vue.git
cd todolist-vue
npm i
npm run serve
```

- 去[github](http://www.github.com)建立帳號
- 建立一個名叫 todolist-vue 的 repository  
  [教學](https://help.github.com/articles/create-a-repo/)

- 設定 remote repository

```bash
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

- 設定 username

```bash
git config --global user.name <你的名稱>
```

- 設定 email

```bash
git config --global user.email <你的email>
```

- commit

```bash
  git add .
  git commit -m 'init'
  git push -u origin master
```

- git-page setup
  把 git-page 設定為 master branch / docs  
  [教學](https://blog.github.com/2016-08-22-publish-your-project-documentation-with-github-pages/)

- 更改 npm run build 的預設目錄  
  加上--dest docs
  package.json

```js
    "build": "vue-cli-service build --dest docs"
```

---

#### vue instance 常見 options/data

- data
- method
- computed
- components
- props

---

#### Directives

- v-model
  > MVVM
- v-show / v-if
- v-for, :key
- v-bind
  > :class 或:style 支援 object 型態
- v-on
  > [dom_events](https://devdocs.io/dom_events/)  
  > [modifiers](https://vuejs.org/v2/api/#v-on)

#### other

- ref
- \$emit
- [lifecycle](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)
- [custom directives](https://vuejs.org/v2/guide/custom-directive.html)
  > hook is all optional

---

切換到 restful 的 branch

```bash
git checkout restful
```

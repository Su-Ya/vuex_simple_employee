# simple_employee_database
## demo
[demo](https://su-ya.github.io/vuex_simple_employee/.)

## 目的
- 如何用 Vuex 實作員工資料的 CRUD

## API 
- 資料的 response 用 Fake Online REST API - [JSONPlaceholder](https://jsonplaceholder.typicode.com/) 

- Request URL: `https://jsonplaceholder.typicode.com/users`
    可使用 GET、POST、DELETE requests，這些請求不會真的儲存在 database

- [Response body](https://jsonplaceholder.typicode.com/users)

## 注意
- GET requests，固定回傳10筆資料
- POST requests，回傳新增的資料，但 id 固定是數字 11

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```
## side project 參考
- [Tania Rascia](https://github.com/taniarascia/vue-tutorial)
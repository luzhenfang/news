# 60world

> 60秒看世界

## 1. Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 2. 简介

一个 基于 Vue-cli 的 每日新闻图片生成，小项目。

前端：Vue`vue-news`

后端：node.js express`express-news`

[在线演示](http://lzfblog.cn:2020/)

[![GLNf6s.png](https://s1.ax1x.com/2020/04/12/GLNf6s.png)](https://imgchr.com/i/GLNf6s)

## 3. 内容

一共由四部分组成

- 星期
- 历史上的今天
- 今日新闻
- 今日微语

> Tips : 这里数据源，有现成的我就不自己抓取了。

## 4. 结构

├── dist
│   ├── dist.zip
│   ├── index.html
│   ├── news.js
│   └── static
├── json.txt
├── news.js
├── node_modules
│   ├── express
│   └── fs
├── package.json
├── spider.log
└── spider.sh

- news
  - dist `npm run build`
  - json.txt `spider.sh 生成数据文件`
  - new.js `express 服务`
  - spider.log `spider.sh 日志文件`
  - spider.sh `获取数据脚本`

## 5. 使用

### 5.1 下载依赖

```
cd vue-news
npm install
npm run build
```

```shell
cd express-vue
npm install
```

### 5.2 拷贝

找到 `dist`文件夹 

将其 拷贝到 express-news 下

> 项目使用了 crontab 因此需要自己设定 确保数据实时刷新

### 5.3 配置crontab

> 这里以centos 为例，确保你是root账户。

```shell
crontab -e
```

```shell
*/10 * * * * sudo -u root /home/site/news/spider.sh >> /home/site/news/spider.log 2>&1
```

上面命令解释为 每10分钟 以 root 身份去执行 `/home/site/news/spider.sh`这个脚本,并且将输出内容重定向到

`/home/site/news/spider.log`编辑完成后保存。

> 因此 这里 需要修改为自己的 实际项目的`绝对路径`

### 5.4 生成项目

``` shell
npm run build
```

> 然后将 `dist` 文件夹拷贝到 `news`  根目录下

### 5.5 启动项目

> 这里使用 pm2 进行部署

```shell
cd yourProjectPath
pm2 run news.js
pm2 list
```

```shell
│ Name  │ mode │ status │ ↺  │ cpu │ memory    │
├───────┼──────┼────────┼────┼─────┼───────────┤
│ index │ fork │ online │ 0  │ 0%  │ 30.6 MB   │
│ news  │ fork │ online │ 37 │ 0%  │ 29.5 MB   │
└───────┴──────┴────────┴────┴─────┴───────────┘
 Use `pm2 show <id|name>` to get more details about an app

```

> news.js 内 设置端口号等信息，默认端口`2020`

到此 如果没有什么意外的话就部署完成了！


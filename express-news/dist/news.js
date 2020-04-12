const express = require('express'); //npm下载并引入express模块 npm -express -D

const app = express();
app.use(express.stitic('./dist')) // ./dist 为vue打包后dist文件夹的路径
app.listen(2021,function(err){ 
	if(err){
		console.log(err)
	}else {
		console.log('启动成功')
	}
})

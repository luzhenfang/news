const express = require('express');
const app = express();
const  fs =require("fs")

app.use(express.static('./dist')) //./dist vue 项目打包后路径
app.post('/news',function(req,res){
	var path ='./json.txt';
	fs.readFile(path,function(err,data){
		if(err){	
			console.log(err);
			res.send('文件不存在');
		}else{
			object=JSON.parse(data)
            var news = new Object({year:object.data.calendar.cYear,
                month:object.data.calendar.cMonth,
                day:object.data.calendar.cDay,
                gzYear:object.data.calendar.gzYear,
                gzMonth:object.data.calendar.gzMonth,
                gzDay:object.data.calendar.gzDay,
                week:object.data.calendar.nWeek,
                historyList:object.data.historyList,
                newsList:object.data.newsList,
                sentence:object.data.sentence,
            });

			 res.header("Content-Type", "application/json; charset=utf-8");
			res.json(news);
		}


	});
	
});
// port 2020
app.listen(2020,function(err){ 
	if(err){
		console.log(err)
	}else {
		console.log('启动成功')
	}
})

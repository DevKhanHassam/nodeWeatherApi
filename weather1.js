//Getting all required modules 

const fs=require('fs');
const http=require('http');
const requests=require('requests');



let myHtmlFile=fs.readFileSync('weather.html','utf8');


//Read weather.js and style.css  so we can add it in weather.html later
let myscript=fs.readFileSync('weather.js','utf8');
let mystyle=fs.readFileSync('style.css','utf8');



// add weather.js and style.css file in it.

myHtmlFile=myHtmlFile.replace("{%style%}",mystyle)
myHtmlFile=myHtmlFile.replace("{%script%}",myscript)


//this is main function that take two argumenat 1=>weather.html and 2=> data from api then add data of api in weather.html file
const replaceVal=(htmlfile,apiValues)=>{

let a=htmlfile;

 a = a.replace("{%tempval%}" ,  apiValues[0].main.temp)
 a = a.replace("{%tempmin%}" ,  apiValues[0].main.temp_min)
 a = a.replace("{%tempmax%}" ,  apiValues[0].main.temp_max)
 a = a.replace("{%location%}",  apiValues[0].name)
 a = a.replace("{%country%}" ,  apiValues[0].sys.country)
 a = a.replace("%tempStatus%",  apiValues[0].weather[0].main)

 
return a;
  
}


const server= http.createServer((req,res)=>{


  if(req.url=="/"){
    

    // api from  openweathermap
    // can change city name in api here city=Karachi
    requests('https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=ca70074d8e7f47787d205c476e24ce45&units=metric')
  
   
   
   
   //below code we have copy from the documentation of requests module package from npm
    .on('data',(chunk)=> {


    //below convert json data in object using parse method
     let objData=JSON.parse(chunk);

     //below convert object to array  so we can easily pass argument in below function
     let arrayData=[objData]


   
    
    var realTimeData= replaceVal(myHtmlFile,arrayData)
    

    res.write(realTimeData);

    })
    .on('end', (err)=> {
      if (err) return console.log('connection closed due to errors', err);
     res.end(console.log("Data end"));
      
    });}
})

server.listen(9900,'127.0.0.1',()=>{console.log('looking for request')})
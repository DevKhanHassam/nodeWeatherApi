
const curDate = document.getElementById('date');

const weathercon =document.getElementById('weathercon');







// we are changing value of tempStatus from weaether1.js
const tempStatus = '%tempStatus%';
if(tempStatus=='Clouds')
 {
  weathercon.innerHTML=' <i class="fa-solid fa-cloud  fa-4x " style="color: #ffffff;"></i>'
 }
else if(tempStatus=='Sunny')
 {
  weathercon.innerHTML=' <i class="fa-solid fa-sun  fa-4x" style="color: #FFF000;"></i>'
 }
else if(tempStatus=='Rain')   
 {
  weathercon.innerHTML=' <i class="fa-solid fa-cloud-rain  fa-4x" style="color: #ffffff;"></i>'
 }
 else if(tempStatus=='Mist')   
 {
  weathercon.innerHTML=' <i class="fa-solid fa-smog  fa-4x" style="color: #ffffff;"></i>'
 }
else
{weathercon.innerHTML=' <i class="fa-solid fa-cloud-moon fa-4x" style="color: #ffffff;"></i>'}




const getCurrentDay = () =>{
    
    let currentTime = new Date();
    
    const weekDays=['Sun',"Mon",'Tue','Wed','Thu','Fri','Sat'];
    const months=['Jan',"Feb",'March','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let day=weekDays[currentTime.getDay()];
    let month=months[currentTime.getMonth()];
    let date=currentTime.getDate();
    let year=currentTime.getFullYear();
    let hour=currentTime.getHours();
    let minute=currentTime.getMinutes();
    minute = (minute < 10) ? "0" + minute : minute;
    let amPm='';

    
    
    if(hour===0)
    {
        hour===12;
    }
    else{}
    
    if(hour>12)
    {
        amPm='pm'
        hour-=12;
    }
    else
    {amPm='am'}

    if(minute<10)
    {minute='0'+minute}
    
 
    curDate.innerHTML=day+' | '+date+ ' '+month+ ' '+year+' | '+hour+':'+minute+' '+ amPm
} 


getCurrentDay();
setInterval(getCurrentDay,1000);


const info = document.getElementById('info');
const inp = document.getElementById('text');
var style=document.querySelector('style');
var cel=document.getElementById('cel');
var humi=document.getElementById('humi');
var head=document.getElementById('heading');
var main=document.querySelector('.main');
getData();
async function getData() {


    var inn = inp.value;
   
    // const url = "http://api.openweathermap.org/data/2.5/weather?q=" + inn + "&units=metric&appid=117a0138213c6e23090a77c42952f2e1";
    // const url = "http://api.openweathermap.org/data/2.5/weather?q="+inn+"&units=metric&appid=c9dbb6a427mshca586e9cc50c6a7p14563fjsn7c08e5e97552";
    const url="http://api.openweathermap.org/data/2.5/weather?q="+inn+"&units=metric&APPID=084bcacee012feaf3cbf41d20ddc0fbd";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data.name);
    console.log(data.weather[0].main);
    console.log(data.main.humidity);
    console.log(data.wind.speed);
    // info.innerHTML = "<span id='p1'>"+ data.name +" </span>"+
    //     "<br> "+data.weather[0].main+ 
    //     "<br> humidity: "+data.main.humidity+
    //     "<br> Wind: "+data.wind.speed+
    //     "<br><di v id='icon'><img src='http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png'></di>";

    cel.innerHTML="<span id='cel'>"+data.main.temp+"&deg;C</span>"+" <span><img  id='icon' src='http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png'></span>";
    // cel.style.
humi.innerHTML="<div>Humidity: "+ data.main.humidity +"<br><span>Feels like:" +data.main.feels_like+"&deg;C</span><br><span>Wind speed: "+data.wind.speed+" mph</div>"
head.innerHTML="<span id='headd'>"+data.name+", "+data.sys.country+"</span><br><span id='desc'>"+data.weather[0].main+" - "+data.weather[0].description+"</span>";

let lnk='https://source.unsplash.com/featured/?'+data.weather[0].main;

main.style.background="url("+lnk+")";
main.style.backgroundRepeat="round";
head.style.textAlign="left";
head.style.paddingLeft="2rem";
humi.style.textAlign="left";
}

function enter()
{
    inp.addEventListener('keyup',(event)=>
    {
        if(event.keyCode==13)
        {
            getData();
        }
    })
    if(event.keyCode==13)
    {
        getData();
    }
}
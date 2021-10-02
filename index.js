const info = document.getElementById('info');
const inp = document.getElementById('text');
var style = document.querySelector('style');
var cel = document.getElementById('cel');
var humi = document.getElementById('humi');
var head = document.getElementById('heading');
var main = document.querySelector('.main');
var form = document.getElementById('controls')
async function getData() {


    var inn = inp.value;


    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + inn + "&units=metric&APPID=084bcacee012feaf3cbf41d20ddc0fbd";
    const result = await fetch(url);
    const data = await result.json();
    console.log(data.name);
    console.log(data.weather[0].main);
    console.log(data.main.humidity);
    console.log(data.wind.speed);


    cel.innerHTML = "<span id='cel'>" + data.main.temp + "&deg;C</span>" + " <span><img  id='icon' src='https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png'></span>";

    humi.innerHTML = "<div>Humidity: " + data.main.humidity + "<br><span>Feels like:" + data.main.feels_like + "&deg;C</span><br><span>Wind speed: " + data.wind.speed + " mph</div>"
    head.innerHTML = "<span id='headd'>" + data.name + ", " + data.sys.country + "</span><br><span id='desc'>" + data.weather[0].main + " - " + data.weather[0].description + "</span>";

    let lnk = 'https://source.unsplash.com/featured/?' + data.weather[0].main;

    main.style.background = "url(" + lnk + ")";
    main.style.backgroundRepeat = "round";
    head.style.textAlign = "left";
    head.style.paddingLeft = "2rem";
    humi.style.textAlign = "left";
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    getData();
})

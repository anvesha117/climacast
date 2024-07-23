
var city = "New_Delhi";
const getfacts = async () => {

    if (document.getElementById('cityInput').value === null) {
        city = "New_Delhi";
        console.log(city);
    }
    else {
        city = document.getElementById('cityInput').value;
        console.log(city);
    }
   
    const URL = "http://api.weatherapi.com/v1/current.json?key=f608e65e81b441c986e44449240306&q=" + city + "&aqi=no";
    let response = await fetch(URL, {
        headers: {
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Credentials': true,



        }
    });
  
    let data = await response.json();
    let current = data["current"];
    let location = data["location"];
    let temp_c = current["temp_c"];
    let feels_like = current["feelslike_c"];
    let preci = current["precip_mm"];
    let visi = current["vis_km"];
    let hum = current["humidity"];
    let uv_idx = current["uv"];
    let wind = current["wind_mph"];
    let gust = current["gust_mph"];
    let weather_icon = current["condition"]["icon"];
    let locationname = location["name"];



    preci = Math.floor(preci);
    document.querySelector("#temp").innerText = temp_c + "°C";
    document.querySelector("#Feels").innerText = feels_like + "°C";
    document.querySelector("#prep").innerText = preci;
    document.querySelector("#Visibility").innerText = visi;
    document.querySelector("#Humidity").innerText = hum + "%";
    document.querySelector("#uv").innerText = uv_idx;
    document.querySelector("#wind").innerText = wind;
    document.querySelector("#gusts").innerText = gust;
    document.querySelector("#locationName").innerText = locationname;

    // document.querySelector("#forecasttemp").innerText=temp_c+"°C";

    if (feels_like < -12) {
        document.querySelector("#feels_hum").innerText = "Due to extreme wind chill and low temperatures, it feels bitterly cold ";
    }
    else if (feels_like >= -12 && feels_like < -6) {
        document.querySelector("#feels_hum").innerText = "Due to factors like wind and humidity, it feels much colder ";
    }
    else if (feels_like >= -6 && feels_like < 0) {
        document.querySelector("#feels_hum").innerText = "With the current wind chill and humidity, it feels colder ";
    }
    else if (feels_like >= 0 && feels_like < 4) {
        document.querySelector("#feels_hum").innerText = "Considering the wind and humidity, it feels slightly colder ";
    }
    else if (feels_like >= 4 && feels_like < 10) {
        document.querySelector("#feels_hum").innerText = "Factors such as wind and humidity make it feel cool ";
    }
    else if (feels_like >= 10 && feels_like < 15) {
        document.querySelector("#feels_hum").innerText = "Due to the wind and sun exposure, it feels mild ";
    }
    else if (feels_like >= 15 && feels_like < 21) {
        document.querySelector("#feels_hum").innerText = "Considering the current humidity and sun, it feels comfortably warmr ";
    }
    else if (feels_like >= 21 && feels_like < 27) {
        document.querySelector("#feels_hum").innerText = "With the current humidity and sun exposure, it feels warm";
    }
    else if (feels_like >= 27 && feels_like < 32) {
        document.querySelector("#feels_hum").innerText = "Due to high humidity and sunlight, it feels quite warm  ";
    }
    else {
        document.querySelector("#feels_hum").innerText = "Considering the high humidity and sun exposure, it feels very hot ";
    }
    if (preci <= 0) {
        document.querySelector("#prep_text").innerText = "Clear skies with no precipitation expected ";
    }
    else if (preci <= 1 && preci >= 5) {
        document.querySelector("#prep_text").innerText = "Light rain expected ";
    }
    else if (preci <= 6 && preci >= 15) {
        document.querySelector("#prep_text").innerText = "Moderate rain with total precipitation ";
    }
    else if (preci <= 16 && preci >= 30) {
        document.querySelector("#prep_text").innerText = "Heavy rain expected ";
    }
    else if (preci <= 31 && preci >= 50) {
        document.querySelector("#prep_text").innerText = "Very heavy rain with significant precipitation ";
    }
    else {
        document.querySelector("#prep_text").innerText = "Extreme rain conditions expected ";
    }
    if (hum = 0 && hum <= 20) {
        document.querySelector("#hum_text").innerText = "The air is very dry ";
    }
    else if (hum >= 21 && hum <= 40) {
        document.querySelector("#hum_text").innerText = "Low humidity levels ";
    }
    else if (hum >= 41 && hum <= 60) {
        document.querySelector("#hum_text").innerText = "Moderate humidity levels ";
    }
    else if (hum >= 61 && hum <= 80) {
        document.querySelector("#hum_text").innerText = "High humidity levels";
    }
    else {
        document.querySelector("#hum_text").innerText = "Very high humidity levels ";
    }
    if (visi >= 10) {
        document.querySelector("#visi_text").innerText = "Visibility is excellent";
    }
    else if (visi >= 6 && visi < 10) {
        document.querySelector("#visi_text").innerText = "Visibility is good";
    }
    else if (visi >= 3 && visi <= 5) {
        document.querySelector("#visi_text").innerText = "Visibility is moderate";
    }
    else if (visi >= 1 && visi <= 2) {
        document.querySelector("#visi_text").innerText = "Visibility is poor";
    }
    else {
        document.querySelector("#visi_text").innerText = "Visibility is very poor";
    }
    if (uv_idx > 11) {
        document.querySelector("#uv_scale").innerText = "Extreme";
    }
    else if (uv_idx >= 8) {
        document.querySelector("#uv_scale").innerText = "Very High";
    }
    else if (uv_idx >= 6 && uv_idx <= 7) {
        document.querySelector("#uv_scale").innerText = " High";
    }
    else if (uv_idx >= 3 && uv_idx <= 5) {
        document.querySelector("#uv_scale").innerText = "Moderate";
    }
    else {
        document.querySelector("#uv_scale").innerText = "Low";
    }
    if (uv_idx > 11) {
        document.querySelector("#uv_scale").innerText = "take extra precautions by wearing sunglasses, applying sunscreen with SPF 30 or higher, wearing protective clothing (such as hats and long sleeves), seeking shade whenever possible, and limiting outdoor activities during peak sun hourse";
    }
    else if (uv_idx >= 8) {
        document.querySelector("#uv_text").innerText = "wear sunglasses, apply sunscreen with SPF 30 or higher, wear protective clothing, and avoid prolonged sun exposure.";
    }
    else if (uv_idx >= 6 && uv_idx <= 7) {
        document.querySelector("#uv_text").innerText = " wear sunglasses, apply sunscreen with SPF 30 or higher, and seek shade during peak sun hours (10 AM to 4 PM)gh";
    }
    else if (uv_idx >= 3 && uv_idx <= 5) {
        document.querySelector("#uv_text").innerText = " consider wearing sunglasses and applying sunscreen if spending extended time outdoors";
    }
    else {
        document.querySelector("#uv_text").innerText = "enjoy outdoor activities without much concern for sun protectionw";
    }
    
    if ((preci > 10)) {
        document.querySelector("#day_type").innerText = "Rainy Day";
        document.querySelector("#day_text").innerText = "Grab your umbrella, it's a rainy day today. Don't forget your raincoat!";
        document.querySelector("#WeatherBackground").style.backgroundImage = "url('../assets/images/rainyday2.jpg')";

    }
    else if ((temp_c > 15) && (hum < 60) && preci == 0) {
        document.querySelector("#day_type").innerText = "Sunny Day";
        document.querySelector("#day_text").innerText = "It's a beautiful sunny day! Perfect for a picnic or a day at the beach";
        document.querySelector("#WeatherBackground").style.backgroundImage = "url('../assets/images/sunnyday 1.avif')";

    }
    else if ((temp_c < 5)) {
        document.querySelector("#day_type").innerText = "Winter Day";
        document.querySelector("#day_text").innerText = "Bundle up! It's a cold winter day with a chance of snow. Stay warm and cozy indoors";
        document.querySelector("#WeatherBackground").style.backgroundImage = "url('../assets/images/winter.jpeg')";

    }
    else if ((hum > 70) && (preci == 0)) {
        document.querySelector("#day_type").innerText = "Cloudy Day";
        document.querySelector("#day_text").innerText = "The sky is overcast today, but don't let that dampen your spirits. It's still a great day for a walk or indoor activities";
        document.querySelector("#WeatherBackground").style.backgroundImage = "url('../assets/images/cloudydays.webp')";

    }
    else if ((temp_c > 20) && (hum < 30)) {
        document.querySelector("#day_type").innerText = "Windy Day";
        document.querySelector("#day_text").innerText = "Hold onto your hats! It's quite windy out there today. Be cautious while driving or walking.Windy Day";

    }
    else if (preci > 2) {
        document.querySelector("#day_type").innerText = "Stromy Day";
        document.querySelector("#day_text").innerText = "A storm is brewing, with thunder and lightning in the forecast. Stay indoors and stay saf";
        document.querySelector("#WeatherBackground").style.backgroundImage = "url('../assets/images/stormydays.jpg')";

    }
    else {
        document.querySelector("#day_type").innerText = "Hazy Day";
        document.querySelector("#day_text").innerText = "The air quality is hazy today due to pollution/dust. Limit outdoor activities if possible";
        document.querySelector("#WeatherBackground").style.backgroundImage = "url('../assets/images/hazydays.jpeg')";

    }


    document.querySelector("#image_icon").src = weather_icon;

    getforecast();
    getlocations();
    getnews();



};

const getforecast = async () => {


    var ForecastURL = "http://api.weatherapi.com/v1/forecast.json?key=f608e65e81b441c986e44449240306&q=" + city + "&days=10&aqi=yes&alerts=no";
   
    let forecastresponse = await fetch(ForecastURL, {
        headers: {
            'Access-Control-Allow-Origin': true,
            'Access-Control-Allow-Credentials': true,



        }
    });


    let data1 = await forecastresponse.json();
    console.log(data1);

    let forecast = data1["forecast"];
    let forecastDay = forecast["forecastday"];
    // console.log(forecastDay);
    forecastDay.map(function (params) {
        var p = params.hour;
        var a = params.date;
        document.querySelector("#date").innerText = a;

        for (let i = 0; i < p.length; i++) {
            var time = p[i].time;
            var timehours = time.slice(-5);
            var timehrs = timehours.split(":")[0];
            let temp_icon = p[i].condition;

            let tempIcon = temp_icon["icon"];
            if (new Date().getHours() == timehrs) {
                document.querySelector("#temp_icon").src = tempIcon;
                let temp_icon1 = p[i + 1].condition;
                let tempIcon1 = temp_icon1["icon"];
                var time1 = p[i + 1].time;
                var timehours1 = time1.slice(-5);
                var timehrs1 = timehours1.split(":")[0];
                document.querySelector("#temp2").innerText = timehrs1;
                document.querySelector("#temp_icon1").src = tempIcon1;
                let temp_icon2 = p[i + 2].condition;
                let tempIcon2 = temp_icon2["icon"];
                var time2 = p[i + 2].time;
                var timehours2 = time2.slice(-5);
                var timehrs2 = timehours2.split(":")[0];
                document.querySelector("#temp3").innerText = timehrs2;
                document.querySelector("#temp_icon2").src = tempIcon2;
                let temp_icon3 = p[i + 3].condition;
                let tempIcon3 = temp_icon3["icon"];
                var time3 = p[i + 3].time;
                var timehours3 = time3.slice(-5);
                var timehrs3 = timehours3.split(":")[0];
                document.querySelector("#temp4").innerText = timehrs3;
                document.querySelector("#temp_icon3").src = tempIcon3;
                let temp_icon4 = p[i + 4].condition;
                let tempIcon4 = temp_icon4["icon"];
                var time4 = p[i + 4].time;
                var timehours4 = time4.slice(-5);
                var timehrs4 = timehours4.split(":")[0];
                document.querySelector("#temp5").innerText = timehrs4;
                document.querySelector("#temp_icon4").src = tempIcon4;
                let temp_icon5 = p[i + 5].condition;
                let tempIcon5 = temp_icon5["icon"];
                var time5 = p[i + 5].time;
                var timehours5 = time5.slice(-5);
                var timehrs5 = timehours5.split(":")[0];
                document.querySelector("#temp6").innerText = timehrs5;
                document.querySelector("#temp_icon5").src = tempIcon5;






            }

        }
    }
    );
    for (i = 0; i < forecastDay.length; i++) {

        var date = forecastDay[i]["date"];
        var date_rev = date.split("-").reverse().join("/");
        var date_day = date.slice(5);
        var date_month = date_day.split("-").reverse().join("/");
        var time = forecastDay[i]["hour"];
        console.log(forecastDay.length);

        let temp_icon = time[12]["condition"];
        let tempIcon = temp_icon["icon"];

        var date = forecastDay[i]["date"];
        if (date != null) {
            var date_rev1 = date.split("-").reverse().join("/");
            var date_day1 = date.slice(5);
            var date_month1 = date_day1.split("-").reverse().join("/");
            let temp_icon1 = time[12]["condition"];
            let tempIcon1 = temp_icon1["icon"];
            document.querySelector(`#date_icon${i + 1}`).src = tempIcon1;
            document.querySelector(`#date${i + 1}`).innerText = date_month1;
            document.querySelector(`#datecol-${i + 1}`).style.display = "block"
        }



    }



}


const getnews = async () => {
    const newsURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1ace0ad25bcf4fa2af8ca96ee4f44c58";
    let newsresponse = await fetch(newsURL);
    let data2 = await newsresponse.json();
    let article1 = data2["articles"];

    for (let i = 0;  i < article1.length; i++) {
        console.log("data",article1[i])
        let newsposition = article1[i];
        let newsimage = newsposition["urlToImage"];
        let newstitle = newsposition["title"];
        let newsurl = newsposition["url"];
        let newsdescription=newsposition["description"];
      
        if (newsimage!=null || newsimage != undefined){
            document.querySelector(`#news_image${i + 1}`).src = newsimage;
        
        
        const linkElement = document.getElementById(`url${i + 1}`);
        linkElement.href = newsurl;

        let maxLength = 35;

    let preview = newstitle.length > maxLength ? newstitle.substring(0, maxLength).trim() + "..." : newstitle;
    let maxLength1=140;
    let urldisplay=newsdescription.length>maxLength1 ? newsdescription.substring(0,maxLength1).trim() + "...":newsdescription;
    document.querySelector(`#news_title${i + 1}`).innerText = preview;
    document.querySelector(`#news_description${i + 1}`).innerText = urldisplay;
    document.querySelector(`#newscol-${i + 1}`).style.display = "block"

    

        }
    }
};

getnews();

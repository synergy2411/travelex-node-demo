var btnSend = document.querySelector("#btnSend");
var address = document.querySelector("#address");
var showWeather = document.querySelector("#show-weather");

btnSend.addEventListener("click", event => {
    event.preventDefault();
    fetch("/weather?address="+address.value)
    // fetch("/weather", {method : "POST", body : address.value})
        .then(response => response.json())
        .then(resp => {
            // console.log(resp);
            showWeather.innerHTML = 
            `In ${resp.location.formatted_address}, seems like ${resp.forecastData.temperature}f.
            <p>Forecast is ${resp.forecastData.summary}</p>
            `
        })
        .catch(err => {
            showWeather.innerHTML = err;
        })
})
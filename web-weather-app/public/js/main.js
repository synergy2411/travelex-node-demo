var btnSend = document.querySelector("#btnSend");
var address = document.querySelector("#address");
var showWeather = document.querySelector("#show-weather");

btnSend.addEventListener("click", event => {
    event.preventDefault();
    fetch("/weather?address="+address.value)
    // fetch("/weather", {method : "POST", body : address.value})
        .then(response => response.json())
        .then(resp => {
            showWeather.innerHTML = 
            `It seems like ${resp.temperature}f at your location.
            <p>Forecast is ${resp.summary}</p>
            `
        })
        .catch(err => {
            showWeather.innerHTML = err;
        })
})
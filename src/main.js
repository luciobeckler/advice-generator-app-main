let adviceText = document.querySelector(".adviceText")
let button = document.querySelector(".reloadButton")
const url = "https://api.adviceslip.com/advice"

button.addEventListener('click', function () {
      fetch(url)
            .then(response => { return response.json() })
            .then(advice => {
                  adviceText.innerHTML = "\"" + advice.slip.advice + "\""

            })


})

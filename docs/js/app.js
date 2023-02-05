const windowLocation = window.location.hash

let requestedCarId = ""
for (let i = 0; i < windowLocation.length; i++) {
    if (windowLocation[i] != "#") {
        requestedCarId += windowLocation[i]
    }
}

document.querySelector(`.car${requestedCarId}`).classList.add("active")
const text = document.querySelector('p.two')

let oldScroll = 0

let numFromText = (array) => {
    let output = ""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element == ".") {
            break
        } else {
            if (parseInt(element)) {
                output += element
            }
        }
    }
    return output
}

window.addEventListener("scroll", () => {
    // If Transfrom Property Empty Then Set it to 1
    if (text.style.transform == "") {
        text.style.transform = 'scale(1)'
    }
    // Else Then Make it Bigger or Smaller 
    else {
        // If Scrolling Down Then Make it Bigger
        console.log(window.scrollY - oldScroll)
        if ((window.scrollY - oldScroll) >= 100) {
            text.style.transform = `scale(${numFromText(text.style.transform) * 2})`
            oldScroll = window.scrollY
            console.log(text.style.transform + " * 2")
        }
        // Else If Scrolling Up Then Make it Smaller
        else if ((window.scrollY - oldScroll) <= -100) {
            console.log(text.style.transform + " / 4")
            text.style.transform = `scale(${numFromText(text.style.transform) / 4})`
        }
    }
})
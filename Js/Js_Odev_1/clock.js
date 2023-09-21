
let name = prompt("İsminizi Giriniz. ");
document.querySelector("#myName").innerHTML = name



function showTime() {

    let clock = document.querySelector("#myClock")
    let today = document.querySelector("#today")

    let date = new Date()
    let seconds = date.getSeconds()
    let write = `${date.getHours()}:${date.getMinutes()}:${seconds.toString().length == 1 ? "0"+seconds : seconds} `
    
    let day = date.getDay()
    switch (day) {
        case 0:
            today.innerHTML = "Pazar"
            break;
        case 1:
            today.innerHTML = "Pazartesi"
            break;
        case 2:
            today.innerHTML = "Salı"
            break;
        case 3:
            today.innerHTML = "Çarşamba"
            break;
        case 4:
            today.innerHTML = "Perşembe"
            break;
        case 5:
            today.innerHTML = "Cuma"
            break;
        case 6:
            today.innerHTML = "Cumartesi"
            break;
        default:
            break;
    }
    
    clock.innerHTML = write
    setInterval(showTime, 1000)
}

showTime()
 

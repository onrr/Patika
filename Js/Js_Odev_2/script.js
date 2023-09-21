

function newElement() {
    let list = document.querySelector("#list")
    let text = document.querySelector("#task")

    if (text.value != "") {

        let li = document.createElement("li")
        var t = document.createTextNode(text.value)
        li.appendChild(t)
        list.appendChild(li)
        text.value = ""


        let span = document.createElement("span")
        let close_icon = document.createTextNode("\u00D7")
        span.className = "close"
        span.appendChild(close_icon)
        li.appendChild(span)

        list.addEventListener('click', function (item) {
            if (item.target.tagName = 'li') {
                item.target.classList.toggle('checked')
            }
        })

        let close = document.querySelectorAll(".close")

        close.forEach((c) => {
            c.onclick = function () {
                let li_elm = this.parentElement
                li_elm.remove()
            }
        });

        $(".success").toast("show");
    }
    else {
        $(".error").toast("show");
    }

}

document.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        newElement()
    }
});

//document.querySelector("label").style.transform ="translatex(28px)"
let ina = setInterval(function() {
    if (document.querySelectorAll("input")[1].value.length == 16) {
        document.querySelectorAll("input")[1].blur()
    }
    if (document.querySelectorAll("input")[2].value.length == 2) {
        document.querySelectorAll("input")[2].blur()
    }
    if (document.querySelectorAll("input")[3].value.length == 2) {
        document.querySelectorAll("input")[3].blur()
    }
    if (document.querySelectorAll("input")[4].value.length == 3) {
        document.querySelectorAll("input")[4].blur()
    }
}, 100)

document.querySelector("form").onsubmit = (e) => {
    console.log(document.querySelectorAll("input")[1].value.match(/0-9/))

    document.querySelector(".c1p").textContent = document.querySelectorAll("input")[4].value
    document.querySelector(".c2p").textContent = document.querySelectorAll("input")[1].value
    document.querySelector(".n").textContent = document.querySelectorAll("input")[0].value
    document.querySelector("h3").textContent = document.querySelectorAll("input")[2].value + "/" + document.querySelectorAll("input")[3].value
    let reg1 = /a-z/ig
    if (document.querySelectorAll("input")[1].value.match(/a-z/i) == true) {
        document.querySelectorAll(".o")[0].style.display = "inline-block"
    }
    if (document.querySelector("input").value.match(reg1) == null) {}
    if (document.querySelectorAll("input")[1].value.length == 0) {
        document.querySelectorAll(".o")[1].style.display = "inline-block"
    }
    if (document.querySelectorAll("input")[2].value.length == 0) {
        document.querySelectorAll(".o")[2].style.display = "inline-block"
    }
    if (document.querySelectorAll("input")[3].value.length == 0) {
        document.querySelectorAll(".o")[3].style.display = "inline-block"
    }
    if (document.querySelector("input").value.length > 0 && /*document.querySelectorAll("input")[1].value.match(/0-9/).length == 16 why this cond not working */ document.querySelectorAll("input")[2].value.length == 2 && document.querySelectorAll("input")[3].value.length == 2 && document.querySelectorAll("input")[4].value.length == 3) {
        document.querySelector(".send").remove()
        console.log(18)
        clearInterval(ina)
        document.querySelector(".thanks").style.display = "inline-block"
    }
    //console.log(document.querySelectorAll("input")[1].value.match(/0-9/).length == 16 )
    e.preventDefault();
}


document.querySelector(".o").style.transform = "translatex(30px)"
for (let i = 0; i < 4; i++) {
    document.querySelectorAll(".o")[i].style.display = "none"
}
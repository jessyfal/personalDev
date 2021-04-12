function setBGPosition(event) {

    pX = 25 + (event.clientX / window.screen.width * 50)
    pY = 25 + (event.clientY / window.screen.height * 50)


    document.getElementsByTagName("html")[0].style.backgroundPosition = pX + "% " + pY + "%"
}

document.onmousemove = setBGPosition;
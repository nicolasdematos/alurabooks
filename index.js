function showhide() {
    console.log(document.querySelector(".menu").style.display)
    if (document.querySelector(".menu").style.display == 'block') {
        document.querySelector(".menu").style.display = 'none'
    } else{
        document.querySelector(".menu").style.display = 'block'
    }
}

function hideshowcontent() {
    console.log('teste')
    if (document.querySelector(".menu2").style.display == 'block') {
        document.querySelector(".menu2").style.display = 'none'
        document.querySelector(".hideshowcontent_button").style.display
    } else {
        document.querySelector(".menu2").style.display = 'block'
    }
}
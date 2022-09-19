function showhide() {
    console.log(document.querySelector(".menu").style.display)
    if (document.querySelector(".menu").style.display == 'block') {
        document.querySelector(".menu").style.display = 'none'
    } else{
        document.querySelector(".menu").style.display = 'block'
    }
}
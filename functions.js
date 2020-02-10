function menuToggle(){
    let menuBtn=document.getElementById('menuBtn')
    let menu=document.getElementById('menuWrap')
    menu.classList.toggle('open')
    menuBtn.classList.toggle('isActive')
}
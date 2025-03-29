var menuicon = document.querySelector('nav>i')
var navmenu = document.querySelector('#navmenu')

var menu = 0

menuicon.addEventListener('click', function(){
    
    if (menu == 0) {
        navmenu.style.right = '0%'
        menuicon.className =`ri-close-circle-line`
        menuicon.style.transform = 'rotate(360deg)'
        menu = 1
    }
    else{
        navmenu.style.right = '-40%'
        menuicon.className =`ri-menu-fold-3-line`
        menuicon.style.transform = 'rotate(0deg)'
        menu = 0
    }

})
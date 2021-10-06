aktiv = document.getElementById('aktiv')
nav_linje = document.getElementById('nav_linje')
nav_bar = document.getElementById('nav_bar')

window.addEventListener('load', () => {
    nav_linje.style.width = (aktiv.offsetWidth - 30) + 'px'
    nav_linje.style.left = aktiv.offsetLeft + 15 + 'px'
})

window.addEventListener('resize', () => {
    nav_linje.style.width = (aktiv.offsetWidth - 30) + 'px'
    nav_linje.style.left = aktiv.offsetLeft + 15 + 'px'
})

Array.from(nav_bar.children).forEach(li => {
    li.addEventListener('mouseover', () => {
        nav_linje.style.width = (li.offsetWidth - 30) + 'px'
        nav_linje.style.left = (li.offsetLeft + 15) + 'px'
    })

    li.addEventListener('mouseout', () => {
        nav_linje.style.width = (aktiv.offsetWidth - 30) + 'px'
        nav_linje.style.left = aktiv.offsetLeft + 15 + 'px'
    })
})

mob_nav = document.getElementById('mob_nav')
bg = document.getElementById('mob_meny_bakgrunn')
meny = document.getElementById('mob_meny')

meny_hoyde = -66 * (Array.from(nav_bar.children)).length + 'px'
meny.style.top = meny_hoyde

let open = false;
mob_nav.onclick = () => {
    toggle_menu()
}

bg.onclick = () => {
    toggle_menu()
}

function toggle_menu() {
    if(open) {
        meny.style.top = meny_hoyde

        bg.style.display = 'none'

        Array.from(mob_nav.children)[0].style.transform = 'rotate(0deg)'
        Array.from(mob_nav.children)[1].style.transform = 'rotate(0deg)'
        Array.from(mob_nav.children)[2].style.transform = 'rotate(0deg)'

        setTimeout(() => {
            Array.from(mob_nav.children)[0].style.top = '0px'
            Array.from(mob_nav.children)[2].style.top = '0px'
        }, 100)
    }
    else {
        meny.style.top = '65px'

        bg.style.display = 'block'

        Array.from(mob_nav.children)[0].style.top = '12px'
        Array.from(mob_nav.children)[2].style.top = '-12px'

        setTimeout(() => {
            Array.from(mob_nav.children)[0].style.transform = 'rotate(45deg)'
        Array.from(mob_nav.children)[1].style.transform = 'rotate(-45deg)'
        Array.from(mob_nav.children)[2].style.transform = 'rotate(-45deg)'
        }, 100)
    }
    open = !open
}

window.addEventListener('resize', () => {
    if(window.innerWidth > 830 && open){
        toggle_menu()
    }
})
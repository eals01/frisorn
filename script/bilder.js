//refererer elementer i bilder.html
let galleri_bilde = document.getElementById('galleri_bilde')
let ramme = document.getElementById('galleri')
let bilde_rulett = document.getElementById('bilde_rulett')
let bilde_linje = document.getElementById('bilde_linje')

//indeksen til det aktivt_bilde bildet
let aktivt_bilde = 0;

//liste over bilder i galleri-mappen
//HER LEGGER DU INN BILDER og resten ordnes automatisk
let bilde_liste = [
    'galleri_bilde_1.jpg',
    'galleri_bilde_2.jpg',
    'galleri_bilde_3.jpg',
    'galleri_bilde_4.jpg',
    'galleri_bilde_5.jpg',
    'galleri_bilde_6.jpg'
]

//legger til alle bildene i forhåndsvisningen under det aktive bildet
let i = 0
for(bilde in bilde_liste) {
    document.getElementById('bilde_rulett').innerHTML += `
        <img src='${'../ressurser/galleri/' + bilde_liste[bilde]}' onclick='bytt_bilde(${i})'>
    `
    i++
}

//logikk for linja som viser hvilket bilde som er aktivt_bilde
Array.from(bilde_rulett.children).forEach(img => {
    img.addEventListener('mouseover', () => {
        bilde_linje.style.left = img.offsetLeft + 'px'
    })
    img.addEventListener('mouseout', () => {
        bilde_linje.style.left = Array.from(document.getElementById('bilde_rulett').children)[aktivt_bilde].offsetLeft + 'px'
    })
})

window.onload = () => {
    galleri_bilde.src = '../ressurser/galleri/' + bilde_liste[aktivt_bilde]

    //sørger for at bildet holder seg innenfor rammen ved endret størrelse
    galleri_bilde.style.maxWidth = ramme.offsetWidth + 'px'
    //logikk for linja som viser hvilket bilde som er aktivt_bilde
    bilde_linje.style.left = Array.from(document.getElementById('bilde_rulett').children)[aktivt_bilde].offsetLeft + 'px'
}

window.addEventListener('resize', () => {
    //sørger for at bildet holder seg innenfor rammen ved endret størrelse
    galleri_bilde.style.maxWidth = ramme.offsetWidth + 'px'
    //logikk for linja som viser hvilket bilde som er aktivt_bilde
    bilde_linje.style.left = Array.from(document.getElementById('bilde_rulett').children)[aktivt_bilde].offsetLeft + 'px'
})

function bytt_bilde(inp) {
    //ser hvilken knapp som er trykket på og utfører medførende handling
    if(inp == 'v') {
        if(aktivt_bilde - 1 < 0) {
            aktivt_bilde = bilde_liste.length - 1
        }
        else {
            aktivt_bilde--
        }
    }
    else if(inp == 'h') {
        if(aktivt_bilde + 1 > bilde_liste.length - 1) {
            aktivt_bilde = 0
        }
        else {
            aktivt_bilde++
        }
    }
    else {
        aktivt_bilde = inp
    }

    galleri_bilde.src = bilde_liste[aktivt_bilde]
    galleri_bilde.src = '../ressurser/galleri/' + bilde_liste[aktivt_bilde]
    bilde_linje.style.left = Array.from(document.getElementById('bilde_rulett').children)[aktivt_bilde].offsetLeft + 'px'
}


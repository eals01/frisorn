bilder = [
    'ressurser/index_galleri/frisørn_trondheim_dybdahl_banner.jpg',
    'ressurser/index_galleri/frisørn_trondheim_dybdahl_banner_2.jpg',
    'ressurser/index_galleri/frisørn_trondheim_dybdahl_banner_3.jpg'
]

let i = 1
window.setInterval(() => {
    if(i == bilder.length) {
        i = 0
    }
    document.getElementById('banner_img').src = bilder[i]
    i++
}, 7000)
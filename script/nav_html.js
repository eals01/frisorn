root = document.getElementById('nav_root')
aktiv_side = document.currentScript.getAttribute('aktiv')

//LEGG INN NYE SIDER HER
side_oversikt = [
    {
        "navn": "HJEM", 
        "href": "index.html"
    },
    {
        "navn": "KONTAKT OSS", 
        "href": "kontakt.html"
    },
    {
        "navn": "OM OSS", 
        "href": "om.html"
    },
    {
        "navn": "BILDER", 
        "href": "bilder.html"
    },
    {
        "navn": "ONLINE BOOKING",
        "href": "onlinebooking.html"
    }
]

//KODE SOM MÅ INN PÅ NYE SIDER OVER <div id='wrap'>
//bytt ut # med indeksen til siden på navigasjonsbaren. HJEM har f.eks. indeks 0, og OM OSS har indeks 2
/*
    <div id='nav_root' aktiv='index'>
    <script src='script/nav_html.js' aktiv='#'></script>
*/

sider = ``
for(side in side_oversikt) {
    sider += `
        <li>
            <a href='${side_oversikt[side].href}'>${side_oversikt[side].navn}</a>
        </li>
    `
}

//html for navigasjonsbaren
root.innerHTML = `
    <div id='nav'>
        <div>
            <ul>
                <li>
                    <a href='index.html'>
                        <img src='ressurser/logo.svg'>
                    </a>    
                </li>
                <li>
                    <div id='nav_linje'></div>
                    <ul id='nav_bar'>
                        ${sider}
                    </ul>
                </li>
                <li>
                    <div id='mob_nav'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div id='mob_meny'>
        <ul>
            ${sider}
        </ul>
    </div>
    <div id='mob_meny_bakgrunn'></div>
`

//setter aktiv side som aktiv
Array.from(document.getElementById('nav_bar').children)[aktiv_side].id = 'aktiv'
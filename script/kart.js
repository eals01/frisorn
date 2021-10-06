let map;

function initMap() {
    window.onload = () => {
        const map = new google.maps.Map(document.getElementById('kart'), {
            center: { lat: 63.4133637, lng: 10.4129722 },
            zoom: 14,
            mapId: '9e465828b1968c7f'
        });
    
        const marker = new google.maps.Marker({
            position: { lat: 63.4133637, lng: 10.4129722 },
            map: map,
            title: 'Dybdahls veg 3, 7051 Trondheim',
        });
    }
}
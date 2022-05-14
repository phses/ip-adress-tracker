class Map {
    constructor(lat, lng) {
        this.lat = lat;
        this.lng = lng;
        this.map =  L.map('map', {
            center: [this.lat,this.lng],
            zoom: 15,
            zoomControl: false
        });
        this.myIcon = L.icon({
            iconUrl: './images/icon-location.svg',
            iconSize:  [38, 48],
            iconAnchor: [22, -50]
        });
    }

    setMapLocation(lat, lng){
        this.lat = lat;
        this.lng = lng
        this.map.setView([this.lat, this.lng]);
        L.marker([this.lat, this.lng], {icon: this.myIcon}).addTo(this.map);
    };

    makeMap() {
        
        L.marker([this.lat, this.lng], {icon: this.myIcon}).addTo(this.map);
        
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoicGhzZXMiLCJhIjoiY2wzMWVoYXJwMXNpYjNjcWM0Mmc4Mms5aiJ9.FHHDvKrOokMqLwDMj9keXg'
        }).addTo(this.map);
    }
}


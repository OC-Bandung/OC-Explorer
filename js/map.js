function initMap() {

    var map;
    var service;
    var infowindow;


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: { lat: -6.917884, lng: 107.602221 }
    });

    map.setOptions({ styles: styles['silver'] });



    // NOTE: This uses cross-domain XHR, and may not work on older browsers.
    map.data.loadGeoJson('geojson/kota-bandung-level-kecamatan.json');



    map.data.setStyle({
        fillColor: '#7ccdbd',
        strokeWeight: 1
    });
 

    marker.setMap(map);

    var bandung = new google.maps.LatLng(-6.917884, 107.602221);

    var request = {
        location: bandung,
        radius: '500',
        query: 'RS Khusus Ibu dan Anak Kota Bandung'
    };

    service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);


  function callback(results, status) {
    if (status !== google.maps.places.PlacesServiceStatus.OK) {
        console.error(status);
        return;
    }
    for (var i = 0, result; result = results[i]; i++) {
        addMarker(result);
    }
}

function addMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: {
      url: 'img/marker.png',
      scaledSize: new google.maps.Size(20, 29)
    }
  });



}
}






var styles = {
    default: null,
    silver: [

        {
            elementType: 'geometry',
            stylers: [{ color: '#f5f5f5' }]
        },
        {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#f5f5f5' }]
        },

        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#bdbdbd' }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#757575' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#dadada' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#616161' }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#e5e5e5' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#eeeeee' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#c9c9c9' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9e9e9e' }]
        }
    ]
};
var map;


var myLatLng = {lat: 55.702568, lng: 12.571690};

        function initMap() {

        //var myLatLngJob = {lat: 55.687307, lng: 12.592884};


        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: myLatLng
        });

            //Hent JSON Data

            $.getJSON("steder.json", dataHentet);
        }

        function dataHentet( data ){
        console.log(data);
        data.forEach( makeMarkers );


        }

        function makeMarkers( place ){
        console.log( place );


        var placering = place.koordinater;

        var marker = new google.maps.Marker({
          position: placering,
          map: map,
          icon: 'mymarker-01.svg',
          title: "Hello"
            });

            marker.addListener('click', function(){
             map.setZoom(18);
             map.setCenter(marker.getPosition());



            //infowindow
            var infowindow = new google.maps.InfoWindow({
                content: "Få lidt lækker mad!",
                position: marker.getPosition()
            });


          var klon = document.querySelector("#info_template").content.cloneNode(true);


          klon.querySelector(".data_navn").innerHTML = place.overskrift;
          klon.querySelector(".data_info").innerHTML = place.info;
          klon.querySelector(".data_billede").src = "img/" + place.billede + ".jpg";
          infowindow.setContent( klon );
          infowindow.open(map, marker);

            });
        }
